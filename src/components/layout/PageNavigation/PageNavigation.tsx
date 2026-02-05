'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './PageNavigation.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function PageNavigation() {
  const container = useRef<HTMLDivElement>(null);
  
  const xPercent = useRef(0);
  const direction = useRef(-1);
  const speed = useRef(0.05);
  const hoverSpeedFactor = useRef(1);
  
  const scrollVelocity = useRef(0);

  useGSAP(() => {
    const track = container.current?.querySelector(`.${styles.marqueeTrack}`) as HTMLElement;
    
    const trigger = ScrollTrigger.create({
      trigger: document.body, 
      onUpdate: (self) => {
        scrollVelocity.current = self.getVelocity();
      }
    });

    const animationLoop = (time: number, deltaTime: number) => {
      const scrollVel = scrollVelocity.current; 
      
      const scrollBoost = Math.abs(scrollVel) * 0.00005; 
      const moveBy = (speed.current + scrollBoost) * hoverSpeedFactor.current * direction.current;

      xPercent.current += moveBy;

      if (xPercent.current <= -100) {
        xPercent.current = 0;
      }
      if (xPercent.current > 0) {
        xPercent.current = -100;
      }

      if (track) {
        gsap.set(track, { xPercent: xPercent.current });
      }
    };

    gsap.ticker.add(animationLoop);

    return () => {
      gsap.ticker.remove(animationLoop);
      trigger.kill();
    };

  }, { scope: container });

  const handleMouseEnter = () => {
    gsap.to(hoverSpeedFactor, { current: 0.1, duration: 0.5, ease: 'power2.out' });
  };

  const handleMouseLeave = () => {
    gsap.to(hoverSpeedFactor, { current: 1, duration: 0.5, ease: 'power2.out' });
  };

  return (
    <div 
      id="page-nav" 
      className={styles.navWrapper} 
      ref={container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href="/about" className="next-ajax-link-page" style={{ textDecoration: 'none', width: '100%' }}>
        
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            <div className={styles.marqueeItem}>
              <h1 className={styles.hugeTitle}>Креативная студия дизайна — </h1>
            </div>
            <div className={styles.marqueeItem}>
              <h1 className={styles.hugeTitle}>Креативная студия дизайна — </h1>
            </div>
            <div className={styles.marqueeItem}>
              <h1 className={styles.hugeTitle}>Креативная студия дизайна — </h1>
            </div>
             <div className={styles.marqueeItem}>
              <h1 className={styles.hugeTitle}>Креативная студия дизайна — </h1>
            </div>
          </div>
        </div>

        <div className={styles.bottomContent}>
          <div className={styles.subtitle}>
             Мы будем рады услышать от вас.<br/>
             Давайте работать вместе
          </div>
        </div>

      </Link>
    </div>
  );
}