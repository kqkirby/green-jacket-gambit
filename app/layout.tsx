import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Green Jacket Gambit • Masters 2026',
  description: 'Trade live Masters winner odds like a pro',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a1f0a] text-white min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}