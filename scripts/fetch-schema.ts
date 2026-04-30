/**
 * Downloads the GraphQL introspection schema from Supabase and writes it to
 * schema.graphql at the project root. Run this once after setting up your
 * Supabase project and enabling pg_graphql:
 *
 *   npx ts-node scripts/fetch-schema.ts
 *
 * The resulting schema.graphql is then used by the Relay compiler.
 */

import { writeFileSync } from 'fs';
import { join } from 'path';
import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY before running.');
  process.exit(1);
}

async function main() {
  const graphqlUrl = `${SUPABASE_URL}/graphql/v1`;
  console.log(`Fetching schema from ${graphqlUrl} …`);

  const res = await fetch(graphqlUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON_KEY!,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ query: getIntrospectionQuery() }),
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  const { data, errors } = (await res.json()) as {
    data?: { __schema: unknown };
    errors?: { message: string }[];
  };

  if (errors?.length) {
    throw new Error(errors.map((e) => e.message).join('\n'));
  }

  if (!data) throw new Error('Empty introspection response');

  const schema = buildClientSchema(data as Parameters<typeof buildClientSchema>[0]);
  const sdl = printSchema(schema);
  const outPath = join(process.cwd(), 'schema.graphql');
  writeFileSync(outPath, sdl, 'utf8');
  console.log(`Schema written to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
