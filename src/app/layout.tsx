import type { Metadata } from 'next';
import { Spectral, Hanken_Grotesk } from 'next/font/google';
import './globals.css';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-spectral',
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'María Belen Pereira · LPC | Psychotherapy Washington DC',
  description:
    'Individual and couples therapy in Washington, DC. Licensed Professional Counselor with 15+ years of experience. Bilingual English/Spanish. In-person & telehealth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spectral.variable} ${hankenGrotesk.variable}`}>
      <head />
      <body className="antialiased bg-[#f3f7f1] text-[#213029] overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}