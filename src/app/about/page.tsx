import React from 'react';
import PageHero from '@/components/layout/PageHero/PageHero';
import AboutSection from '@/components/features/AboutSection/AboutSection';
import { getPortfolioData } from '@/lib/data';

export default function AboutPage() {
  const data = getPortfolioData();

  return (
    <>
      <PageHero title="О нас" caption="Digital Creative Studio" />
      
      <div id="main-content">
        <div id="main-page-content">
           {/* Повторно используем секцию с главной, так как это основной текст "О нас" */}
           <AboutSection />
           
           {/* Можно добавить дополнительный текст из JSON, если он там есть */}
           <div className="content-max-width" style={{ padding: '80px', textAlign: 'center' }}>
              <p>
                Мы создаем уникальные цифровые решения, которые помогают бизнесу выделяться 
                и оставаться актуальными для своих клиентов.
              </p>
           </div>
        </div>
      </div>
    </>
  );
}