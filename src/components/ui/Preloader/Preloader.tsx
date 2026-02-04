'use client';

import React, { useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Preloader.module.css';

interface PreloaderProps {
  settings: {
    preloader_text?: string;
    preloader_intro?: string;
  };
}

export default function Preloader({ settings }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  const introListRef = useRef<HTMLUListElement>(null);
  
  const [animationMode, setAnimationMode] = useState<'checking' | 'full' | 'short' | 'hidden'>('checking');

  const introWords = settings.preloader_intro 
    ? settings.preloader_intro.split(',').map(w => w.trim()) 
    : ['Loading'];

  useLayoutEffect(() => {
    const hasVisited = typeof window !== 'undefined' && sessionStorage.getItem('isLoaded');
    if (hasVisited) {
      setAnimationMode('short');
    } else {
      setAnimationMode('full');
    }
  }, []);

  useGSAP(() => {
    if (!containerRef.current || animationMode === 'checking' || animationMode === 'hidden') return;

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('isLoaded', 'true');
        document.body.classList.add('is-loaded');
        setAnimationMode('hidden');
      }
    });

    if (animationMode === 'full') {
      const counter = { val: 0 };
      
      const TOTAL_TIME = 2.0;
      const WORD_SPEED = 0.15;
      const FREEZE_TIME = 0.8;

      tl.set(containerRef.current, { opacity: 1 });

      tl.fromTo(containerRef.current, 
        { backgroundColor: '#ffffff' }, 
        { backgroundColor: '#000000', duration: 1.2, ease: 'power2.out' },
        0
      );

      tl.to(counter, {
        val: 100,
        duration: TOTAL_TIME,
        ease: 'linear',
        onUpdate: () => {
          if (percentRef.current) {
            percentRef.current.innerText = Math.round(counter.val).toString() + '%';
          }
        }
      }, 0);

      if (introListRef.current) {
        const items = introListRef.current.children;
        const totalWords = items.length;
        
        const activeTime = TOTAL_TIME - FREEZE_TIME;
        
        const steps = Math.floor(activeTime / WORD_SPEED);

        for (let i = 0; i < steps; i++) {
          const wordIndex = i % totalWords;
          const item = items[wordIndex];

          const startTime = i * WORD_SPEED;
          const endTime = (i + 1) * WORD_SPEED;

          tl.set(item, { opacity: 1 }, startTime);
          
          if (i < steps) {
            tl.set(item, { opacity: 0 }, endTime);
          }
        }

        const lastWord = items[totalWords - 1];
        const freezeStart = steps * WORD_SPEED; 

        tl.set(lastWord, { opacity: 1 }, freezeStart);
      }

      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0
      });
    }

    else if (animationMode === 'short') {
      if (percentRef.current) percentRef.current.innerText = '100%';
      
      if (introListRef.current && introListRef.current.children.length > 0) {
        const lastIndex = introListRef.current.children.length - 1;
        gsap.set(introListRef.current.children[lastIndex], { opacity: 1 });
      }

      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.1 
      });
    }

  }, { scope: containerRef, dependencies: [animationMode] });

  if (animationMode === 'hidden') return null;

  return (
    <div ref={containerRef} className={styles.preloaderWrap}>
      <div className={styles.outer}>
        <div className={styles.introWrapper}>
          <ul ref={introListRef} className={styles.introList}>
            {introWords.map((word, i) => (
              <li key={i} className={styles.introItem}>{word}</li>
            ))}
          </ul>
        </div>
        <div className={styles.introText}>
          {animationMode === 'short' ? 'Welcome back' : (settings.preloader_text || 'Please wait')}
        </div>
        <div className={styles.percentageWrapper}>
          <div ref={percentRef} className={styles.percentage}>
            {animationMode === 'short' ? '100%' : '0%'}
          </div>
        </div>
      </div>
    </div>
  );
}