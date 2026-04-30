import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { fetchGraphQL } from './network';

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchGraphQL),
    store: new Store(new RecordSource()),
    getDataID(fieldValue: Record<string, unknown>, typeName: string) {
      if (typeof fieldValue.nodeId === 'string') {
        return fieldValue.nodeId;
      }
      if (typeof fieldValue.id === 'string') {
        return `${typeName}:${fieldValue.id}`;
      }
      return null;
    },
  });
}

let relayEnvironment: Environment | null = null;

export function getRelayEnvironment(): Environment {
  if (typeof window === 'undefined') {
    return createRelayEnvironment();
  }
  if (!relayEnvironment) {
    relayEnvironment = createRelayEnvironment();
  }
  return relayEnvironment;
}
