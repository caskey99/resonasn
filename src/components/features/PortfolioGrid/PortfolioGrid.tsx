'use client';

import React from 'react';
import Link from 'next/link';
import styles from './PortfolioGrid.module.css';
import { PortfolioItem } from '@/types/data';
import { cn } from '@/lib/utils';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  // Берем только первые 4 проекта, как в оригинале (index.html: data.portfolio[:4])
  const featuredItems = items.slice(0, 4);

  // Логика "Wide" элементов из Jinja: {% if loop.index in [1, 3, 4] %} (в JS это индексы 0, 2, 3)
  const isWide = (index: number) => [0, 2, 3].includes(index);

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className="content-row row_padding_bottom full light-section" data-bgcolor="#eee">
          
          <div id="itemsWrapperLinks">
            <div id="itemsWrapper" className="webgl-fitthumbs fx-three">
              <div className={`${styles.portfolioWrap} portfolio-wrap flex-grid content-full-width fade-scaleout-effect`}>
                <div className={`${styles.portfolio} portfolio`}>
                  
                  {featuredItems.map((item, index) => {
                    const wideClass = isWide(index) ? styles.wide : ''; // Модульный класс для CSS
                    const legacyWide = isWide(index) ? 'wide' : '';    // Легаси класс для JS
                    
                    return (
                      <div 
                        key={item.id}
                        className={cn(
                          styles.item, 
                          wideClass,
                          "item",           // LEGACY: Critical for animations
                          legacyWide,       // LEGACY
                          "trigger-item",   // LEGACY: For ScrollTrigger
                          "active",
                          item.categories.join(' ').toLowerCase()
                        )}
                        data-color={item.navigation_color}
                      >
                        <div className="item-parallax">
                          <div className="item-appear">
                            <div className={`${styles.itemContent} item-content`}>
                              
                              {/* Ссылка на проект */}
                              <Link 
                                href={`/portfolio/${item.id}`}
                                className="item-wrap ajax-link-project" 
                                data-type="page-transition"
                              />

                              <div className={`${styles.itemImageWrap} item-wrap-image`}>
                                {/* Основное изображение */}
                                <img 
                                  src={item.image} 
                                  className={`${styles.itemImage} item-image grid__item-img trigger-item-link`} 
                                  alt={item.title} 
                                />

                                {/* Видео фон (если есть) */}
                                {item.has_video && (
                                  <div className={`${styles.itemVideo} hero-video-wrapper`}>
                                    <video loop muted className="bgvid" autoPlay playsInline>
                                      {item.video_mp4 && <source src={item.video_mp4} type="video/mp4" />}
                                      {item.video_webm && <source src={item.video_webm} type="video/webm" />}
                                    </video>
                                  </div>
                                )}
                              </div>
                              
                              {/* Дубликат для эффектов WebGL (из оригинала) */}
                              <img 
                                className="grid__item-img grid__item-img--large" 
                                src={item.image} 
                                alt={item.title} 
                                style={{ display: 'none' }} // Скрываем, он нужен только скрипту
                              />

                            </div>
                          </div>

                          {/* Текст под картинкой */}
                          <div className={styles.itemCaptionWrapper}>
                            <div className={`${styles.itemCaption} item-caption`}>
                              <div className={`${styles.itemTitle} item-title`}>
                                <span>{item.title}</span>
                              </div>
                              <div className={`${styles.itemCategory} item-cat`}>
                                <span data-hover="Посмотреть кейс">
                                  {item.category_display || (item.categories[0] || 'Design')}
                                </span>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}