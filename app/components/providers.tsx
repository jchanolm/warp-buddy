// app/components/providers.tsx
'use client';

import { MiniKitProvider } from '@coinbase/onchainkit/minikit';
import { base } from 'viem/chains';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MiniKitProvider
      projectId={process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_ID!}
      chain={base}
      notificationProxyUrl="/api/notification"
    >
      {children}
    </MiniKitProvider>
  );
}
