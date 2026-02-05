'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ShowcaseParallax.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const stickySection = containerRef.current?.querySelector(`.${styles.stickyContainer}`);
    const textFill = containerRef.current?.querySelector(`.${styles.titleFill}`);
    const bgImage = containerRef.current?.querySelector(`.${styles.bgImage}`);

    if (stickySection && textFill && bgImage) {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      tl.to(textFill, {
        clipPath: 'inset(0% 0% 0% 0%)',
        ease: 'none',
      });

      tl.to(bgImage, {
        scale: 1.15,
        ease: 'none'
      }, 0);
    }
    
  }, { scope: containerRef });

  return (
    <div className={styles.wrapper} ref={containerRef}>
      
      <div className={`${styles.stickyContainer} dark-section`}>
        
        <img 
          src="/static/images/about.jpg" 
          alt="Showcase Background" 
          className={styles.bgImage}
        />
        
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <span className={styles.titleGhost}>
              Отмеченная наградами<br />
              Цифровая студия
            </span>
            
            <span className={styles.titleFill}>
              Отмеченная наградами<br />
              Цифровая студия
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}