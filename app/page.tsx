'use client';

import { useEffect } from 'react';
import { useMiniKit, useAuthenticate } from '@coinbase/onchainkit/minikit';

export default function Page() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const { signIn } = useAuthenticate();

  useEffect(() => {
    if (!isFrameReady) setFrameReady();
  }, [isFrameReady]);

  const handleSignIn = async () => {
    const result = await signIn();
    if (result) {
      console.log('SIWF result', result);
    }
  };

  return (
    <div>
      <h1>Hi {(context as any)?.viewer?.username || 'anon'}!</h1>
      <p>FID: {(context as any)?.viewer?.fid}</p>

      <button onClick={handleSignIn}>Sign In with Farcaster</button>
    </div>
  );
}
