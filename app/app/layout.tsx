import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Green Jacket Gambit',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a1f0a] text-white">{children}</body>
    </html>
  );
}