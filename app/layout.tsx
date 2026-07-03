import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site-data';

export const metadata: Metadata = {
  title: {
    default: '별내목수 | 아이라이크 인테리어',
    template: '%s | 별내목수',
  },
  description: site.description,
  openGraph: {
    title: '별내목수 | 아이라이크 인테리어',
    description: site.description,
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
