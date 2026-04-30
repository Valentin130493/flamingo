'use client';

import { RelayEnvironmentProvider } from 'react-relay';
import { getRelayEnvironment } from '@/relay/environment';

export function RelayProvider({ children }: { children: React.ReactNode }) {
  return (
    <RelayEnvironmentProvider environment={getRelayEnvironment()}>
      {children}
    </RelayEnvironmentProvider>
  );
}
