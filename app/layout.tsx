// app/layout.tsx
import './globals.css';
import { Providers } from './components/providers';

export const metadata = {
  title: 'Warp Buddy',
  description: 'Farcaster Onboarding Tool',
  other: {
    'fc:frame': '{"version":"vNext","image":"https://warp-buddy.vercel.app/og.png","button":{"label":"Enter","action":"https://warp-buddy.vercel.app"}}'
  }
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
