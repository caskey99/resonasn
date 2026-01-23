'use client';

import React from 'react';
import Link from 'next/link';
import styles from './PageNavigation.module.css';

export default function PageNavigation() {
  return (
    <div id="page-nav" className={styles.navWrapper}>
      <div className="page-nav-wrap">
        <div className="page-nav-caption content-full-width block-title marquee-title">
          <div className="inner">
            <Link 
              href="/about" 
              className="page-title next-ajax-link-page" 
              data-type="page-transition"
            >
              <div className="next-hero-title-wrapper">
                <div className={`${styles.title} next-hero-title`}>
                  <span>Креативная</span> <span>Студия Дизайна</span>
                </div>
              </div>
              <div className="next-hero-subtitle-wrapper">
                <div className={`${styles.subtitle} next-hero-subtitle`}>
                  <span>Мы будем рады услышать от вас.</span><br/>
                  <span>Давайте работать вместе</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}