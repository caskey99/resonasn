'use client';

import React from 'react';
import styles from './ShowcaseParallax.module.css';

export default function ShowcaseParallax() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className="content-row full dark-section change-header-color" data-bgcolor="#eee">
          
          <figure className="has-parallax has-parallax-content" data-delay="100" style={{ height: '60vh', overflow: 'hidden', position: 'relative', margin: 0 }}>
            <img 
              src="/static/images/about.jpg" 
              alt="Awards Studio" 
              className={styles.parallaxImage}
              style={{ transform: 'translate(0px, -20%)' }} // Начальная позиция для JS
            />
            
            <div className={`${styles.overlayContent} parallax-image-content content-max-width text-align-center`}>
              <div className="outer">
                <div className="inner">
                  <h3 className={`${styles.title} has-mask-fill no-margins`}>
                    <span>Отмеченная наградами</span>
                  </h3>
                  <h3 className={`${styles.title} has-mask-fill`}>
                    <span>Цифровая студия</span>
                  </h3>
                </div>
              </div>
            </div>
          </figure>

        </div>
      </div>
    </div>
  );
}