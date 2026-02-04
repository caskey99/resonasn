import { getPortfolioData } from '@/lib/data';
import Hero from '@/components/layout/Hero/Hero';
import PortfolioGrid from '@/components/features/PortfolioGrid/PortfolioGrid';
import AboutSection from '@/components/features/AboutSection/AboutSection';
import ShowcaseParallax from '@/components/features/ShowcaseParallax/ShowcaseParallax';
import BlogPreview from '@/components/features/BlogPreview/BlogPreview';
import PageNavigation from '@/components/layout/PageNavigation/PageNavigation';
import Preloader from '@/components/ui/Preloader/Preloader';

export default function Home() {
  const data = getPortfolioData();
  const featuredPosts = data.blog.slice(0, 3);

  return (
    <>
      <Hero />
      
      {/* Главный контейнер контента (как в base.html -> index.html) */}
      <div id="main-content" className="portfolio-page">
        <div id="main-page-content" className="content-max-width">

          <Preloader settings={data.settings} />
          
          {/* 1. Сетка портфолио (уже содержит свои wrapper-ы) */}
          <PortfolioGrid items={data.portfolio} />
          
          {/* 2. Секция "О нас" */}
          <AboutSection />
          
          {/* 3. Параллакс блок */}
          <ShowcaseParallax />
          
          {/* 4. Блог */}
          <BlogPreview posts={featuredPosts} />
          
        </div>

        {/* Навигация на следующую страницу */}
        <PageNavigation />
      </div>
    </>
  );
}