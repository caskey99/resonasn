import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header/Header';
import { getPortfolioData } from '@/lib/data';

// Настройка шрифтов (примерная, пути должны совпадать с папкой public)
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

  return (
    <html lang="ru" className={basisGrotesque.variable}>
      <head>
        {/* Подключаем FontAwesome (легаси) */}
        <link rel="stylesheet" href="/static/css/all.min.css" />
      </head>
      <body className="smooth-scroll">
        
        {/* Шапка сайта */}
        <Header menuItems={data.menu} settings={data.settings} />

        {/* Контент страниц */}
        <main id="main">
            {children}
        </main>

        {/* === LEGACY SCRIPTS === */}
        {/* Важно соблюдать порядок загрузки, как в base.html */}
        
        {/* 1. jQuery (Критичен для всего) */}
        <Script 
          src="https://code.jquery.com/jquery-3.6.0.min.js" 
          strategy="beforeInteractive" 
        />
        
        {/* 2. Вспомогательные библиотеки */}
        <Script src="/static/js/modernizr.js" strategy="afterInteractive" />
        <Script src="/static/js/jquery.waitforimages.js" strategy="afterInteractive" />
        <Script src="/static/js/appear.js" strategy="afterInteractive" />
        <Script src="/static/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        
        {/* 3. Анимации (GSAP) */}
        <Script src="/static/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/static/js/scrollmagic.min.js" strategy="afterInteractive" />
        <Script src="/static/js/scrolltrigger.min.js" strategy="afterInteractive" />
        
        {/* 4. WebGL и основные скрипты проекта */}
        {/* Загружаем лениво, чтобы React успел отрисовать DOM */}
        <Script src="/static/js/clapatwebgl.js" strategy="lazyOnload" />
        <Script src="/static/js/scripts.js" strategy="lazyOnload" />
        
      </body>
    </html>
  );
}