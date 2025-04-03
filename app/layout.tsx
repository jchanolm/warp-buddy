// app/layout.tsx
import './globals.css';
import { Providers } from './components/providers';

export const metadata = {
  title: 'Warp Buddy',
  description: 'Farcaster Onboarding Tool',
  // IMPORTANT: This meta tag must be exactly what the Farcaster Frame system expects.
  other: {
    'fc:frame': JSON.stringify({
      version: "vNext", // note: use "vNext" (not "next")
      image: "https://warp-buddy.vercel.app/og.png", // use a real image URL or placeholder
      button: {
        label: "Enter", // button text
        action: "https://warp-buddy.vercel.app" // MUST exactly match your deployed URL
      }
    })
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
