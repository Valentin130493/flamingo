import type { GraphQLResponse, RequestParameters, Variables } from 'relay-runtime';

export async function fetchGraphQL(
  params: RequestParameters,
  variables: Variables,
): Promise<GraphQLResponse> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }

  const graphqlUrl = `${supabaseUrl}/graphql/v1`;

  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
    body: JSON.stringify({ query: params.text, variables }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL network error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<GraphQLResponse>;
}
