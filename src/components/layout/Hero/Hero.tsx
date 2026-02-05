'use client';

import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import Magnetic from '@/components/ui/Magnetic';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    const titleSpans = `.${styles.herotitleSpan}`;
    const subtitle = `.${styles.heroSubtitle}`;
    const footer = `.${styles.heroFooter}`;

    // 1. НАЧАЛЬНОЕ СОСТОЯНИЕ (Прозрачность + смещение)
    // opacity: 0 критически важен, чтобы текст не "мелькал" до начала
    gsap.set(titleSpans, { y: '120%', opacity: 0 }); 
    gsap.set([subtitle, footer], { y: 30, opacity: 0 });

    // 2. АНИМАЦИЯ
    tl.current
      // Заголовок: выезжает и становится видимым
      .to(titleSpans, {
        y: '0%',
        opacity: 1, // Плавное появление
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.1, 
      })
      // Подзаголовок
      .to(subtitle, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      }, '-=1.0') // Overlap для плавности
      // Футер
      .to(footer, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.9');

  }, { scope: containerRef });

  useEffect(() => {
    const playAnim = () => {
        // Небольшая задержка (0.2s), чтобы шторка успела чуть приподняться
        // Текст начнет выезжать прямо "из-под" поднимающейся тьмы
        gsap.delayedCall(0.1, () => {
            tl.current?.play();
        });
    };

    // Слушаем наш новый триггер из Preloader
    const onPreloaderStartExit = () => playAnim();
    
    // Фолбек: если сайт загрузился без прелоадера (например, при hot reload или если он был удален)
    const checkLoaded = () => {
      if (document.body.classList.contains('is-loaded')) {
        playAnim();
      }
    };

    window.addEventListener('preloader-start-exit', onPreloaderStartExit);
    
    // Проверка при маунте (для случаев без прелоадера)
    checkLoaded();

    return () => {
      window.removeEventListener('preloader-start-exit', onPreloaderStartExit);
    };
  }, []);

  return (
    <div id="hero" className={styles.hero} ref={containerRef}>
      <div id="hero-styles" className={styles.heroStyles}>
        
        {/* Caption Section */}
        <div id="hero-caption" className={`${styles.heroCaption} content-full-width parallax-scroll-caption`}>
          <div className={styles.inner}>
            
            <div className={styles.heroTitleWrapper}>
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
              <div className={`${styles.scrollIcon} icon-wrap parallax-wrap`} data-cursor="hover"> 
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
            <div id="info-text" className={styles.heroFooterRight}>ИЗБРАННЫЕ КЕЙСЫ (04)</div>
          </div>
        </div>

      </div>
    </div>
  );
}