// app/layout.tsx

import './globals.css';
import { Providers } from './components/providers';

// ✅ add this
export const metadata = {
  title: 'Warp Buddy',
  description: 'Farcaster Onboarding Tool',
  other: {
    'fc:frame': JSON.stringify({
      version: "next",
      imageUrl: "https://your-domain.vercel.app/og.png",  // can be blank or temp
      button: {
        title: "Get Recs",
        action: {
          type: "launch_frame",
          url: "https://warp-buddy.vercel.app", // your deployed vercel URL
        },
      },
    }),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
