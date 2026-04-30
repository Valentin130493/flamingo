/**
 * Post-processes the Supabase pg_graphql schema to make it compatible with
 * the Relay compiler.
 *
 * Problem: pg_graphql declares `interface Node { nodeId: ID! }` and every
 * table type implements it. The Relay compiler's `generate_id_field` transform
 * panics when it finds a `Node` interface without an `id: ID!` field.
 *
 * Fix: remove the `Node` interface and `implements Node` declarations entirely.
 * We do NOT use the `node(nodeId: ID!)` refetch path — all pagination uses
 * Query-root @refetchable fragments. Record identity is handled by the custom
 * `getDataID` in the Relay environment, which reads `nodeId` as a plain field.
 *
 * Run automatically by `npm run fetch-schema`.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const schemaPath = join(process.cwd(), 'schema.graphql');
let schema = readFileSync(schemaPath, 'utf8');

// Remove the Node interface block (with optional leading comment/docstring)
schema = schema.replace(/"""[\s\S]*?"""\s*\ninterface Node \{[\s\S]*?\}\n?/m, '');
schema = schema.replace(/interface Node \{[\s\S]*?\}\n?/m, '');

// Remove "implements Node" from all type declarations
schema = schema.replace(/\bimplements Node\b/g, '');

// Remove the node(nodeId: ID!): Node query field (including optional docstring).
// The field spans multiple lines — match greedily to the closing ) : Node line.
schema = schema.replace(/[ \t]*"""[^"]*"""\s*\n[ \t]*node\([^)]*\)\s*:\s*Node[ \t]*\n/g, '');
schema = schema.replace(/[ \t]*node\([^)]*\)\s*:\s*Node[ \t]*\n/g, '');

// Clean up any double blank lines left behind
schema = schema.replace(/\n{3,}/g, '\n\n');

writeFileSync(schemaPath, schema, 'utf8');
console.log('Schema patched: removed Node interface for Relay compiler compatibility.');
