import type { Metadata } from 'next';
import { Shippori_Mincho, Zen_Kaku_Gothic_New, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import './globals.css';

const mincho = Shippori_Mincho({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mincho',
  display: 'swap',
});

const gothic = Zen_Kaku_Gothic_New({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-gothic',
  display: 'swap',
});

const mono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'sen. — UI/UX Designer / Portfolio',
    template: '%s — sen. / Portfolio',
  },
  description:
    'UI/UXデザイナー sen. のポートフォリオ。装飾を引き算する。思想は、残す。',
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
