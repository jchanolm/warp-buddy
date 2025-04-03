// app/layout.tsx
import './globals.css';
import { Providers } from './components/providers';

export const metadata = {
  title: 'Warp Buddy',
  description: 'Farcaster Onboarding Tool',
  other: {
    'fc:frame': JSON.stringify({
      version: "next",                // Use "next", not "vNext"
      imageUrl: "https://warp-buddy.vercel.app/og.png", // Key must be imageUrl
      aspectRatio: "3:2",             // Required aspect ratio
      button: {
        title: "Enter",               // Use "title" instead of "label"
        action: {                     // Action must be an object
          type: "launch_frame",
          name: "Enter",
          url: "https://warp-buddy.vercel.app", // Must exactly match your deployed URL
          splashImageUrl: "https://warp-buddy.vercel.app/splash.png", // Example splash image
          splashBackgroundColor: "#000" // Example background color
        }
      }
    })
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
