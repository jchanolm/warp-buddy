'use client';

import { useEffect } from 'react';
import { useMiniKit, useAuthenticate } from '@coinbase/onchainkit/minikit';

type Viewer = {
  fid: number;
  username?: string;
  displayName?: string;
};

type Context = {
  viewer?: Viewer;
};

export default function Page() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const { signIn } = useAuthenticate();

  useEffect(() => {
    if (!isFrameReady) setFrameReady();
  }, [isFrameReady, setFrameReady]);

  const extendedContext = context as Context | null;

  return (
    <div>
      <h1>Hi {extendedContext?.viewer?.username || 'anon'}!</h1>
      <p>FID: {extendedContext?.viewer?.fid}</p>

      <button onClick={async () => {
        const result = await signIn();
        console.log(result);
      }}>
        Sign In
      </button>
    </div>
  );
}
