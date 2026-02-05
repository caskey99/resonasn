'use client';

import React from 'react';
import styles from './Hero.module.css';
import Magnetic from '@/components/ui/Magnetic';

export default function Hero() {
  return (
    <div id="hero" className={styles.hero}>
      <div id="hero-styles" className={styles.heroStyles}>
        
        {/* Caption Section */}
        <div id="hero-caption" className={`${styles.heroCaption} content-full-width parallax-scroll-caption`}>
          <div className={styles.inner}>
            
            <div className={styles.heroTitleWrapper}>
              {/* Ставим классы, которые ожидает JS (hero-title) */}
              <h1 className={`${styles.heroTitle} hero-title`}>
                <span className={styles.herotitleSpan}>Digital</span>
                <span className={styles.herotitleSpan}>Creative</span>
                <div className={styles.herotitleSpanWrapper}>
                <div className={styles.heroSubtitleWrapper}>
                <span className={styles.herotitleSpan}>Studio</span>
                  <h5 className={`${styles.heroSubtitle} hero-subtitle`}>
                    <span>Агентство дизайна и стратегии с адаптивным подходом к решению задач.</span>
                  </h5>
                </div>

                </div>
              </h1>
            </div>
          

          </div>
        </div>

        {/* Footer Section */}
        <div id="hero-footer" className={styles.heroFooter}>
          <div className="hero-footer-left">
            <div className={`${styles.scrollDown} button-wrap left scroll-down`}>
             <Magnetic strength={0.5}>
              <div className={`${styles.scrollIcon} icon-wrap parallax-wrap`} data-cursor="hover"> {/* data-cursor="hover" чтобы курсор тоже реагировал заливкой */}
                <div className="button-icon parallax-element">
                  <i className="arrow-icon-down"></i>
                </div>
              </div>
            </Magnetic>
              <div className={`${styles.scrollText} button-text sticky left`}>
                <span data-hover="Прокрутите для просмотра">Прокрутите для просмотра</span>
              </div>
            </div>
          </div>
          
          <div className="hero-footer-right">
            <div id="info-text" className={styles.heroFooterRight}>Избранные кейсы (04)</div>
          </div>
        </div>

      </div>
    </div>
  );
}