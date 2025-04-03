// app/layout.tsx

import './globals.css';
import { Providers } from './components/providers';

export const metadata = {
  title: 'My App',
  description: 'Working finally',
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
