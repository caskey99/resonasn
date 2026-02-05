'use client';

import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import Magnetic from '@/components/ui/Magnetic';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const images = {
    digital: '/static/images/01hero.jpg',
    creative: '/static/images/03hero.jpg',
    studio: '/static/images/04hero.jpg',
  };

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    const titleSpans = `.${styles.herotitleSpan}`;
    const subtitle = `.${styles.heroSubtitle}`;
    const footer = `.${styles.heroFooter}`;

    gsap.set(titleSpans, { y: '120%', opacity: 0 }); 
    gsap.set([subtitle, footer], { y: 30, opacity: 0 });

    tl.current
      .to(titleSpans, {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.1, 
      })
      .to(subtitle, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      }, '-=1.0')
      .to(footer, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.9');

  }, { scope: containerRef });

  const { contextSafe } = useGSAP({ scope: containerRef });
  
  const handleMouseMove = contextSafe((e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.currentTarget;
    const { left, top, width, height } = target.getBoundingClientRect();
    
    const xPos = ((e.clientX - left) / width - 0.5) * 100; 
    const yPos = ((e.clientY - top) / height - 0.5) * 100;

    const intensityX = 0.4; 
    const intensityY = 0.6;

    gsap.to(target, {
      backgroundPosition: `${50 + xPos * intensityX}% ${50 + yPos * intensityY}%`,
      duration: 1.0, 
      ease: 'sine.out',
    });
  });

  const handleMouseLeave = contextSafe((e: React.MouseEvent<HTMLSpanElement>) => {
    gsap.to(e.currentTarget, {
      backgroundPosition: '50% 50%',
      duration: 1.2,
      ease: 'sine.out',
    });
  });

  useEffect(() => {
    const playAnim = () => {
        gsap.delayedCall(0.1, () => {
            tl.current?.play();
        });
    };
    const onPreloaderStartExit = () => playAnim();
    const checkLoaded = () => {
      if (typeof document !== 'undefined' && document.body.classList.contains('is-loaded')) {
        playAnim();
      }
    };
    window.addEventListener('preloader-start-exit', onPreloaderStartExit);
    checkLoaded();
    return () => {
      window.removeEventListener('preloader-start-exit', onPreloaderStartExit);
    };
  }, []);

  return (
    <div id="hero" className={styles.hero} ref={containerRef}>
      <div id="hero-styles" className={styles.heroStyles}>
        
        <div id="hero-caption" className={`${styles.heroCaption} content-full-width parallax-scroll-caption`}>
          <div className={styles.inner}>
            
            <div className={styles.heroTitleWrapper}>
              <h1 className={`${styles.heroTitle} hero-title`}>
                
                {/* 1. DIGITAL */}
                <span 
                  className={`${styles.herotitleSpan} ${styles.revealText}`}
                  style={{ backgroundImage: `url(${images.digital})` }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Digital
                </span>
                
                {/* 2. CREATIVE */}
                <span 
                  className={`${styles.herotitleSpan} ${styles.revealText}`}
                  style={{ backgroundImage: `url(${images.creative})` }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Creative
                </span>
                
                <div className={styles.herotitleSpanWrapper}>
                  <div className={styles.heroSubtitleWrapper}>
                    {/* 3. STUDIO */}
                    <span 
                      className={`${styles.herotitleSpan} ${styles.revealText}`}
                      style={{ backgroundImage: `url(${images.studio})` }}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      Studio
                    </span>
                    
                    <h5 className={`${styles.heroSubtitle} hero-subtitle`}>
                      <span>Агентство дизайна и стратегии с адаптивным подходом к решению задач.</span>
                    </h5>
                  </div>
                </div>

              </h1>
            </div>
          
          </div>
        </div>

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
            <div id="info-text" className={styles.heroFooterRight}>Избранные кейсы (04)</div>
          </div>
        </div>

      </div>
    </div>
  );
}