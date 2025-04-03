// app/layout.tsx

import './globals.css';
import { Providers } from './components/providers';

export const metadata = {
  title: 'Warp Buddy',
  description: 'Farcaster Onboarding Tool',
  other: {
    'fc:frame': JSON.stringify({
      version: "next",
      imageUrl: "https://warp-buddy.vercel.app/og.png",
      button: {
        title: "Get Recommendations",
        action: {
          type: "launch_frame",
          url: "https://warp-buddy.vercel.app", // 👈 MUST match your deployed URL exactly
        },
      },
    }),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
