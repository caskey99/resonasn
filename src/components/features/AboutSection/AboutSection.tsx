'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './AboutSection.module.css';
import Magnetic from '@/components/ui/Magnetic';

export default function AboutSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const words = gsap.utils.toArray<HTMLElement>(`.${styles.hoverWord}`);

    words.forEach((word) => {
      const reveal = word.querySelector(`.${styles.hoverReveal}`) as HTMLElement;
      const innerImg = word.querySelector(`.${styles.hoverRevealImgReal}`) as HTMLElement;

      if (!reveal) return;

      gsap.set(reveal, { xPercent: -50, yPercent: -50 });
      
      const xTo = gsap.quickTo(reveal, "x", { duration: 1.0, ease: "power3" });
      const yTo = gsap.quickTo(reveal, "y", { duration: 1.0, ease: "power3" });

      const handleMouseEnter = () => {
        reveal.classList.add(styles.active);

        gsap.fromTo(reveal, 
          { 
            clipPath: 'inset(0% 100% 0% 0%)', 
            autoAlpha: 1 
          },
          { 
            clipPath: 'inset(0% 0% 0% 0%)', 
            duration: 0.6, 
            ease: "expo.out", 
            overwrite: 'auto'
          }
        );
      };

      const handleMouseLeave = () => {
        reveal.classList.remove(styles.active);
        gsap.to(reveal, { 
          clipPath: 'inset(0% 0% 0% 100%)', 
          duration: 0.5, 
          ease: "expo.in", 
          overwrite: 'auto',
          onComplete: () => {
             gsap.set(reveal, { autoAlpha: 0, clipPath: 'inset(0% 100% 0% 0%)' });
          }
        });
      };

      const handleMouseMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      word.addEventListener('mouseenter', handleMouseEnter);
      word.addEventListener('mouseleave', handleMouseLeave);
      word.addEventListener('mousemove', handleMouseMove);

      return () => {
        word.removeEventListener('mouseenter', handleMouseEnter);
        word.removeEventListener('mouseleave', handleMouseLeave);
        word.removeEventListener('mousemove', handleMouseMove);
      };
    });
  }, { scope: container });

  return (
    <div className={styles.wrapper} ref={container}>
      <div className={styles.container}>
        <div className={`${styles.contentRow} light-section`} data-bgcolor="#eee">
          
          <h1 className={styles.title}>
            Мы помогаем{' '}
            <span className={`${styles.hoverWord}`}>
              бизнесу
              <div className={styles.hoverReveal}> 
                <div className={styles.hoverRevealInner}>
                  <img 
                    src="/static/images/studio01.jpg" 
                    alt="Studio 01"
                    className={styles.hoverRevealImgReal}
                  />
                </div>
              </div>
            </span>
            {' '}внедрять<br />

            инновации и оставаться<br />

            актуальными для своих<br />

            <span className={`${styles.hoverWord}`}>
              клиентов
              <div className={styles.hoverReveal}>
                <div className={styles.hoverRevealInner}>
                  <img 
                    src="/static/images/studio02.jpg" 
                    alt="Studio 02"
                    className={styles.hoverRevealImgReal}
                  />
                </div>
              </div>
            </span>
            {' '}путем разработки<br />

            передовых цифровых<br />

            продуктов
          </h1>
          
          <hr className={styles.divider} />
          
          <div className={styles.grid}>
            <div className={styles.columnEmpty}></div>
            <div className={styles.column}>
              <div style={{ marginBottom: 60 }}>
                <h5 className={styles.subtitle}>Задача</h5>
                <p className={styles.text}>
                  Создание цифровых решений, которые не только привлекательны визуально, но и эффективно решают бизнес-задачи. Мы фокусируемся на понимании потребностей пользователей и создании интуитивных интерфейсов.
                </p>
                <hr className={styles.divider} style={{ marginBottom: 40 }} />
              </div>

              <div>
                <h5 className={styles.subtitle}>Подход</h5>
                <p className={styles.text}>
                  Наш процесс начинается с глубокого исследования и анализа. Мы используем современные методологии дизайна и разработки, чтобы создавать продукты, которые действительно работают.
                </p>
              </div>

              <div className={styles.buttonWrapper}>
                <Magnetic strength={0.3}>
                    <div className={`${styles.iconWrap} icon-wrap`}>
                        <div className={`${styles.buttonIcon} button-icon`}>
                           <i className="fa fa-arrow-right"></i>
                        </div>
                    </div>
                </Magnetic>
                <Link href="/about" className="ajax-link">
                   <div className={`${styles.buttonText} button-text`}>
                      <span data-hover="Узнать о нас">Узнать о нас</span>
                   </div>
                </Link>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}