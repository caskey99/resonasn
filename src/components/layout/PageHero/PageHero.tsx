'use client';

import React from 'react';
import styles from './PageHero.module.css';

interface PageHeroProps {
  title: string;
  caption?: string;
}

export default function PageHero({ title, caption }: PageHeroProps) {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.inner}>
        {caption && <div className={styles.caption}>{caption}</div>}
        <h1 className={`${styles.title} hero-title`}>{title}</h1>
      </div>
    </div>
  );
}