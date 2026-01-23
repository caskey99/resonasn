'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import { Settings, MenuItem } from '@/types/data';

interface HeaderProps {
  menuItems: MenuItem[];
  settings: Settings;
}

export default function Header({ menuItems, settings }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        
        {/* Логотип */}
        <div className={styles.logo}>
          <Link href="/">
             {/* Два логотипа для смены цвета (черный/белый) - пока ставим оба, стилями разрулим */}
             <img 
               src={settings.logo} 
               alt="Logo" 
               className={styles.logoBlack} 
             />
          </Link>
        </div>

        {/* Десктоп Меню */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {menuItems.map((item, index) => {
              const isActive = pathname === item.url;
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              
              return (
                <li key={index} className={styles.navItem}>
                  <Link 
                    href={item.url} 
                    className={styles.navLink}
                    onClick={(e) => hasSubmenu && e.preventDefault()} // Если есть подменю, клик открывает его (на тач) или игнорируется
                  >
                    <span>{item.title}</span>
                  </Link>
                  
                  {/* Подменю */}
                  {hasSubmenu && (
                    <ul className={styles.submenu}>
                      {item.submenu!.map((sub, subIndex) => (
                        <li key={subIndex} className={styles.subItem}>
                          <Link href={sub.url}>
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

        {/* Мобильный Бургер (визуально) */}
        <div className={styles.burgerWrapper}>
          <span className={styles.burgerCaption}>{settings.menu_btn_caption}</span>
          <div style={{width: 30, height: 2, background: '#000'}}></div>
        </div>

      </div>
    </header>
  );
}