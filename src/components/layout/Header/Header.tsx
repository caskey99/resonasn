'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Убрали импорт gsap, он тут больше не нужен
import styles from './Header.module.css';
import { Settings, MenuItem } from '@/types/data';

interface HeaderProps {
  menuItems: MenuItem[];
  settings: Settings;
}

export default function Header({ menuItems, settings }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isHidden ? styles.headerHidden : ''}`}>
      <div className={styles.container}>
        
        <div className={styles.logo}>
          <Link href="/" data-cursor="hover"> {/* Добавили data-cursor */}
             <img src={settings.logo} alt="Logo" className={styles.logoBlack} />
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {menuItems.map((item, index) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              
              return (
                <li key={index} className={styles.navItem}>
                  <Link 
                    href={item.url} 
                    className={styles.navLink}
                    onClick={(e) => hasSubmenu && e.preventDefault()}
                    data-cursor="hover" // Добавили триггер для курсора
                  >
                    <span>{item.title}</span>
                  </Link>
                  
                  {hasSubmenu && (
                    <ul className={styles.submenu}>
                      {item.submenu!.map((sub, subIndex) => (
                        <li key={subIndex} className={styles.subItem}>
                          <Link href={sub.url} data-cursor="hover">
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.burgerWrapper} data-cursor="hover">
          <span className={styles.burgerCaption}>{settings.menu_btn_caption}</span>
          <div style={{width: 30, height: 2, background: '#000'}}></div>
        </div>

      </div>
    </header>
  );
}