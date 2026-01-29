'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './MenuOverlay.module.css';
import { MenuItem } from '@/types/data';

interface MenuOverlayProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ items, isOpen, onClose }: MenuOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    // Инициализируем таймлайн (paused: true, чтобы не играл сам)
    tl.current = gsap.timeline({ paused: true })
      .to(containerRef.current, {
        duration: 0.5,
        autoAlpha: 1, // GSAP smart opacity + visibility
        ease: 'power3.inOut',
      })
      .to(`.${styles.navLink}`, {
        y: '0%',
        duration: 0.8,
        stagger: 0.1, // Ссылки выезжают по очереди
        ease: 'power4.out', // Резкий и плавный выход
      }, '-=0.3'); // Начинаем чуть раньше, чем закончится анимация фона

  }, { scope: containerRef });

  // Управление воспроизведением при изменении isOpen
  useGSAP(() => {
    if (isOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isOpen]);

  return (
    <div ref={containerRef} className={styles.overlay}>
      <nav className={styles.navContainer}>
        {items.map((item, index) => (
          <div key={index} className={styles.linkWrapper}>
            <Link 
              href={item.url} 
              className={styles.navLink}
              onClick={onClose} // Закрываем при клике
            >
              {item.title}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}