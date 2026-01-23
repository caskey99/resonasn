import React from 'react';
import { getPortfolioData } from '@/lib/data';
import PageHero from '@/components/layout/PageHero/PageHero';
import PortfolioMain from '@/components/features/PortfolioMain/PortfolioMain';
import PageNavigation from '@/components/layout/PageNavigation/PageNavigation';

export default function PortfolioPage() {
  const data = getPortfolioData();

  return (
    <>
      {/* Hero Section (Заголовок как на скрине) */}
      <PageHero title="Портфолио" caption="Наши работы" />
      
      <div id="main-content">
        <div id="main-page-content">
           
           {/* Компонент с фильтрами и сеткой */}
           <PortfolioMain items={data.portfolio} />
           
        </div>

        {/* Навигация внизу страницы */}
        <PageNavigation />
      </div>
    </>
  );
}