import { getPortfolioData } from '@/lib/data';
import Hero from '@/components/layout/Hero/Hero';
import PortfolioGrid from '@/components/features/PortfolioGrid/PortfolioGrid';
import AboutSection from '@/components/features/AboutSection/AboutSection';
import ShowcaseParallax from '@/components/features/ShowcaseParallax/ShowcaseParallax';
import BlogPreview from '@/components/features/BlogPreview/BlogPreview';
import PageNavigation from '@/components/layout/PageNavigation/PageNavigation';

export default function Home() {
  const data = getPortfolioData();
  const featuredPosts = data.blog.slice(0, 3); // Берем 3 последних поста

  return (
    <>
      <Hero />
      
      <div id="main-content" className="portfolio-page">
        <div id="main-page-content" className="content-max-width">
          
          {/* Сетка портфолио */}
          <PortfolioGrid items={data.portfolio} />
          
          {/* Секция "О нас" */}
          <AboutSection />
          
          {/* Параллакс блок */}
          <ShowcaseParallax />
          
          {/* Новости блога */}
          <BlogPreview posts={featuredPosts} />
          
        </div>

        {/* Навигация на следующую страницу (Footer Link) */}
        <PageNavigation />
      </div>
    </>
  );
}