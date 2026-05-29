import type { Metadata } from 'next';
import { Noto_Serif_JP, Cormorant_Garamond, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import './globals.css';

const mincho = Noto_Serif_JP({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-mincho',
  display: 'swap',
});

const gothic = Inter({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-gothic',
  display: 'swap',
});

const mono = Cormorant_Garamond({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'sen. — UI/UX Designer & Photographer / Portfolio',
    template: '%s — sen. / Portfolio',
  },
  description:
    'UI/UXデザイナー兼フォトグラファー sen. のポートフォリオ。装飾を引き算する。思想は、残す。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'sen. — Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${mincho.variable} ${gothic.variable} ${mono.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
        {process.env.NODE_ENV === 'development' ? (
          <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />
        ) : null}
      </body>
    </html>
  );
}
