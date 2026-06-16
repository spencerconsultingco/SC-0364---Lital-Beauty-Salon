import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `Lital Beauty Salon | Brooklyn, New York`,
  description: `Premium hair, skin, and beauty treatments in Brooklyn, NY. Expert haircuts, laser hair removal, PRP facials, eyebrow threading, and more. Book your appointment today.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorantGaramond.variable + ' ' + jost.variable}>
      <body className="font-body bg-brand-background text-brand-text">
        {children}
      </body>
    </html>
  );
}
