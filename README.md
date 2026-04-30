# Issue Tracker

Minimal issue tracker built with Next.js 16 (App Router), Relay, Supabase pg_graphql, TypeScript (strict), and Tailwind CSS.

---

## Setup

### 1. Clone and install

```bash
git clone <repo>
cd flamingo-test-task
npm install
```

### 2. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and create a free project.
2. In **Dashboard → Database → Extensions**, enable `pg_graphql`.
3. In **Dashboard → SQL Editor**, paste and run the contents of `supabase/seed.sql`. This creates all tables, indexes, seed data, and disables RLS for the demo.

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Fill in your values from **Dashboard → Settings → API**:

```
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
NEXT_PUBLIC_DEMO_USER_ID=11111111-0000-0000-0000-000000000001
```

### 4. Fetch schema and compile Relay

```bash
# Download live schema from Supabase into schema.graphql
npm run fetch-schema

# Generate TypeScript types and query artifacts into src/__generated__/
npm run relay
```

### 5. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/issues`.

---

## Relay + pg_graphql: making them work together

This is the most interesting part of the assessment. Here is a complete account of the problem and the solution.

### The core incompatibility

Relay's store normalisation requires every record to carry a stable, globally-unique string key. By convention Relay looks for a field named `id: ID!` on every type that implements the `Node` interface.

pg_graphql generates two ID-like fields on every table row:

| field | type | value |
|---|---|---|
| `id` | `UUID!` | the raw primary-key UUID from the database column |
| `nodeId` | `ID!` | base64-encoded global node ID, e.g. `["public","issues","<uuid>"]` |

`nodeId` is what you would want for Relay's node interface — it encodes the type name and is globally unique across tables. But it is **not** named `id`, so the Relay compiler rejects types that declare `Node` with only `nodeId: ID!` — it requires `id: ID!`.

### Attempted approaches

#### Option A — rename `nodeId → id` in schema.graphql

A build-time script could download the schema and replace every `nodeId` with `id` in the SDL. The compiler would then be happy, but at runtime outgoing GraphQL queries would have `id` while the server only knows `nodeId`. A second transform in the network layer would swap the names back.

**Rejected:** two-way name mangling is fragile — it breaks on aliases, introspection queries, and any time pg_graphql adds new node types.

#### Option B — schema extension declaring `id: ID!` alongside `nodeId`

Add a `schemaExtensions` file that declares `extend type Issues { id: ID! }` for each table. The compiler would accept it, and the `id: UUID!` column that pg_graphql already exposes would satisfy the value (UUID strings are valid `ID` scalars).

**Rejected:** GraphQL forbids redeclaring an existing field (`id` already exists as `UUID!`). Even with a type-coercion hack this breaks `@refetchable` because the generated `node(id: ID!)` query argument clashes with pg_graphql's `node(nodeId: ID!)`.

#### Option C — remove `Node` interface + avoid `@refetchable` on entity types ✓ **(implemented)**

The Relay compiler's `generate_id_field` transform panics with `Expected 'Node' to contain a field named 'id'` when the schema has `interface Node { nodeId: ID! }` (pg_graphql's convention). The fix is a `scripts/patch-schema.ts` post-processor that removes the `Node` interface and all `implements Node` declarations from the local schema copy. Since we never use `node(nodeId: ID!)` refetching — all pagination runs through Query-root `@refetchable` fragments — losing the interface costs nothing.

Additionally, `@refetchable` only requires `id: ID!` when placed on a concrete node type. Placing it on the **Query root** avoids that constraint entirely.

```graphql
fragment IssueListFragment on Query          # ← root, not Issues
@refetchable(queryName: "IssueListRefetchQuery")
@argumentDefinitions(first: {type: "Int", defaultValue: 20}, ...)
{
  issuesCollection(first: $first, after: $after, ...) @connection(key: "IssueList_issuesCollection") {
    edges { node { ...IssueListItemFragment } }
  }
}
```

`usePaginationFragment` works correctly with Query-root `@refetchable` fragments. The same pattern is used for the comment thread.

### Runtime normalisation: `getDataID`

Even without the compiler constraint, Relay needs to normalise records in the store. The default `getDataID` looks for `id`. We override it in `src/relay/environment.ts`:

```typescript
getDataID(fieldValue, typeName) {
  if (typeof fieldValue.nodeId === 'string') return fieldValue.nodeId;
  if (typeof fieldValue.id === 'string')     return `${typeName}:${fieldValue.id}`;
  return null;
}
```

Because `nodeId` encodes the type name it is safe to use as a cross-table key without namespacing. The fallback covers join-table rows (e.g. `IssueLabels`) that have `id: UUID!` but not a meaningful `nodeId`.

Every fragment that should be store-normalised requests `nodeId` explicitly so `getDataID` can find it.

### Real-time updates

Supabase Realtime delivers row-level change events from PostgreSQL. On `UPDATE` we call `commitLocalUpdate` to patch the specific record in the Relay store without refetching:

```typescript
commitLocalUpdate(environment, (store) => {
  const nodeId = btoa(`["public", "issues", "${updated.id}"]`);
  const record = store.get(nodeId);
  if (record) record.setValue(updated.status, 'status');
});
```

On `INSERT` or `DELETE` we trigger a refetch. A better implementation would use `ConnectionHandler` — see trade-offs.

### Optimistic updates

Status changes use Relay's built-in optimistic response system. The UI updates instantly; on mutation failure Relay automatically reverts the store and `onError` shows a toast:

```typescript
commitUpdateStatus({
  variables: { id: issue.id, status: nextStatus },
  optimisticResponse: {
    updateissuesCollection: {
      records: [{ nodeId: issue.nodeId, id: issue.id, status: nextStatus }],
    },
  },
  onError(err) {
    showToast(`Failed to update status: ${err.message}`, 'error');
  },
});
```

---

## Architecture decisions

**Fragment co-location** — each component owns its data contract as a Relay fragment defined in the same file. The issue detail page composes three independent fragments (header, body, comments) in the same root query; each section can evolve its data needs without touching others.

**Query-root pagination** — both the issue list and comment thread use Query-root `@refetchable` + `@connection` fragments. This is the cleanest workaround for the pg_graphql node-ID incompatibility and keeps `usePaginationFragment` fully functional.

**`useLazyLoadQuery` over `usePreloadedQuery`** — for simplicity in this demo. In production you'd use `loadQuery` in a Next.js Server Component (or route loader) to avoid the render-then-fetch waterfall.

**Server-side label filtering** — pg_graphql exposes `UUIDFilter { in: [UUID!] }` on every UUID column. When label filters are selected, the Supabase JS client runs a direct `issue_labels` query to resolve matching `issue_id` values, then passes them as `filter.id.in` to the Relay query. This keeps pagination accurate without changing the GraphQL schema.

**Relay operation naming** — Relay v20 enforces that every operation name starts with the module filename. GraphQL tags live in `fragment.ts`, `mutation.ts`, and `query.ts` barrel files; operation names follow the `fragmentXxx` / `mutationXxx` / `queryXxx` convention to satisfy the compiler.

**Per-field mutations** — `title`, `status`, and `priority` on an issue each have a dedicated mutation. A single combined `SET { title, status, priority }` would null-out the fields not included in the variables, violating NOT NULL constraints.

**Status and priority as enums** — `IssueStatus` and `IssuePriority` are TypeScript string enums. `Object.values()` drives the badge constants and select options so there is no out-of-sync array to maintain.

**No authentication** — uses a fixed `NEXT_PUBLIC_DEMO_USER_ID` for comment authorship. RLS is disabled so the anon key has full read/write access.

---

## Trade-offs / what I'd do with more time

| What | Why it matters |
|---|---|
| **Real-time INSERT via `ConnectionHandler`** | Currently INSERT triggers a full refetch. `ConnectionHandler.insertEdgeAfter` would be instant, but requires passing the connection key (including filter variables) out of the component tree. |
| **`usePreloadedQuery` + route loaders** | Eliminates render-then-fetch waterfall. With App Router the ideal pattern is `loadQuery` in a Server Component passing the reference down to Client Components. |
| **Supabase Auth + RLS** | Replace the demo user with real auth. Add row-level security: owners edit their issues, everyone reads. |
| **Assignee picker** | A combobox querying `usersCollection` + `updateIssuesCollection`. Straightforward with the existing fragment pattern. |
| **Relay persisted queries** | For production: persist compiled queries to reduce payload size and prevent schema introspection. |
| **Error boundaries** | Wrap each Suspense boundary with a React Error Boundary to gracefully handle network failures instead of crashing. |
