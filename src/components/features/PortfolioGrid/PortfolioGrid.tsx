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
  // Берем первые 4 элемента (как в index.html)
  const featuredItems = items.slice(0, 4);

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.portfolioWrap}>
          {/* Flex Container */}
          <div className={styles.portfolio}>
            
            {featuredItems.map((item) => (
              <div 
                key={item.id}
                className={cn(styles.item, "trigger-item")}
                data-color={item.navigation_color}
              >
                <div className={styles.itemContent}>
                  
                  <Link 
                    href={`/portfolio/${item.id}`}
                    className="item-wrap ajax-link-project"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}
                  />

                  <div className={styles.itemWrapImage}>
                    <img 
                      src={item.image} 
                      className={styles.itemImage} 
                      alt={item.title} 
                    />

                    {item.has_video && (
                      <div className={styles.heroVideoWrapper}>
                        <video loop muted autoPlay playsInline className={styles.bgvid}>
                          {item.video_mp4 && <source src={item.video_mp4} type="video/mp4" />}
                          {item.video_webm && <source src={item.video_webm} type="video/webm" />}
                        </video>
                      </div>
                    )}
                  </div>

                  <div className={styles.itemCaption}>
                    <div className={styles.itemTitle}>{item.title}</div>
                    <div className={styles.itemCategory}>
                      {item.category_display || (item.categories[0] || 'Design')}
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}