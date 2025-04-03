// components/providers.tsx
'use client';

import { ReactNode } from 'react';
import { MiniKitProvider } from '@coinbase/onchainkit/minikit';
import { base } from 'viem/chains';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MiniKitProvider
      projectId="your-project-id"
      chain={base}
    >
      {children}
    </MiniKitProvider>
  );
}
