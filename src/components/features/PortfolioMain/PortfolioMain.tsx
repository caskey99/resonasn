'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './PortfolioMain.module.css';
import { PortfolioItem } from '@/types/data';
import { cn } from '@/lib/utils';

interface PortfolioMainProps {
  items: PortfolioItem[];
}

export default function PortfolioMain({ items }: PortfolioMainProps) {
  const [filter, setFilter] = useState<string>('*'); // Текущий фильтр
  const [isFiltersOpen, setIsFiltersOpen] = useState(false); // Состояние шторки

  // 1. Извлекаем уникальные категории из всех проектов
  const categories = useMemo(() => {
    const cats = new Set<string>();
    items.forEach(item => {
      item.categories.forEach(c => cats.add(c));
    });
    return Array.from(cats);
  }, [items]);

  // 2. Фильтруем проекты
  const filteredItems = useMemo(() => {
    if (filter === '*') return items;
    return items.filter(item => item.categories.includes(filter));
  }, [items, filter]);

  // Хендлеры
  const handleFilterClick = (cat: string) => {
    setFilter(cat);
    setIsFiltersOpen(false); // Закрываем шторку после выбора
  };

  return (
    <>
      {/* --- Кнопка открытия фильтров --- */}
      <div 
        className={styles.showFilters} 
        onClick={() => setIsFiltersOpen(true)}
        data-tooltip="Фильтр"
      >
        <div className={styles.openFilters}>
          <i className="fa-solid fa-sort"></i>
        </div>
      </div>

      {/* --- Шторка с фильтрами (Overlay) --- */}
      <div className={cn(styles.filtersOverlay, isFiltersOpen ? styles.open : '')}>
        <div className={styles.closeFilters} onClick={() => setIsFiltersOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        
        <div className={styles.filtersContent}>
          <a 
            className={cn(styles.filterLink, filter === '*' ? styles.active : '')}
            onClick={() => handleFilterClick('*')}
          >
            Все
          </a>
          
          {categories.map((cat) => (
            <a 
              key={cat}
              className={cn(styles.filterLink, filter === cat ? styles.active : '')}
              onClick={() => handleFilterClick(cat)}
            >
              {cat}
            </a>
          ))}
        </div>
      </div>

      {/* --- Основная сетка проектов --- */}
      <div className={styles.sectionWrapper}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {filteredItems.map((item) => (
              <div key={item.id} className={styles.item}>
                {/* Parallax Wrapper (упрощенный для React) */}
                <div className="item-content">
                  
                  <Link href={`/portfolio/${item.id}`} className={styles.itemLink}>
                    <div className={styles.itemImageWrap}>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className={styles.itemImage} 
                      />
                      {/* Если есть видео, можно добавить сюда */}
                    </div>
                  </Link>

                  <div className={styles.itemCaption}>
                    <div className={styles.itemTitle}>{item.title}</div>
                    <div className={styles.itemCategory}>
                      {item.categories.join(', ')}
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}