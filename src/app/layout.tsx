import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/Header/Header';
import { getPortfolioData } from '@/lib/data';
import SmoothScroll from '@/components/ui/SmoothScroll';
import MagicCursor from '@/components/ui/MagicCursor';
import Preloader from '@/components/ui/Preloader/Preloader';

const basisGrotesque = localFont({
  src: [
    { 
      path: '../../public/static/webfonts/fontsfree-net-basisgrotesquepro-regular-webfont.woff2', 
      weight: '400', 
      style: 'normal' 
    },
    { 
      path: '../../public/static/webfonts/fontsfree-net-basisgrotesquepro-medium-webfont.woff2', 
      weight: '500', 
      style: 'normal' 
    },
  ],
  variable: '--font-basis',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Harington Portfolio',
  description: 'Digital Creative Studio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = getPortfolioData();

  console.log("data", data)

  return (
    <html lang="ru" className={basisGrotesque.variable}>
      <head>
        {/* Оставляем CSS для верстки, но удаляем JS */}
        <link rel="stylesheet" href="/static/css/all.min.css" />
        <link rel="stylesheet" href="/static/css/style.css" /> 
        <link rel="stylesheet" href="/static/css/showcase.css" />
        <link rel="stylesheet" href="/static/css/portfolio.css" />
      </head>
      <body>

        <Preloader settings={data.settings} />
        
        <SmoothScroll>
            {/* Хедер пока без анимации скролла, просто рендерим */}
            <MagicCursor />
            <Header menuItems={data.menu} settings={data.settings} />

            <main id="main">
                {children}
            </main>

            <footer id="footer-container">
               {/* Footer */}
            </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}