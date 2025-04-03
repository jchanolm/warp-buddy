'use client';

import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { useEffect } from 'react';

type ExtendedFrameContext = {
  fid: number;
  username?: string;
};

export default function Home() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const extendedContext = (context ?? {}) as ExtendedFrameContext;

  useEffect(() => {
    if (!isFrameReady) setFrameReady();
  }, [isFrameReady]);

  if (!context) return <div>Loading...</div>;

  return (
    <div>
      <p>FID: {extendedContext.fid}</p>
      <p>Username: {extendedContext.username || 'Unknown'}</p>
    </div>
  );
}
