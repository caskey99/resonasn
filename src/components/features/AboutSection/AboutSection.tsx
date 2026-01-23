'use client';

import React from 'react';
import Link from 'next/link';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={`${styles.contentRow} light-section fadeout-element`} data-bgcolor="#eee">
          
          <hr className={styles.divider} />
          
          <h1 className={styles.title}>
            Мы помогаем{' '}
            <span className="has-hover-image hide-ball" data-img="/static/images/studio01.jpg">
              бизнесу
              <div className="hover-reveal">
                <div className="hover-reveal__inner">
                  <div 
                    className="hover-reveal__img" 
                    style={{ backgroundImage: "url('/static/images/studio01.jpg')" }}
                  ></div>
                </div>
              </div>
            </span>
            {' '}внедрять инновации и оставаться актуальными для своих{' '}
            <span className="has-hover-image hide-ball" data-img="/static/images/studio02.jpg">
              клиентов
              <div className="hover-reveal">
                <div className="hover-reveal__inner">
                  <div 
                    className="hover-reveal__img" 
                    style={{ backgroundImage: "url('/static/images/studio02.jpg')" }}
                  ></div>
                </div>
              </div>
            </span>
            {' '}путем разработки передовых цифровых продуктов
          </h1>
          
          <hr className={styles.divider} />
          <hr className={styles.divider} />
          
          <div className={styles.grid}>
            {/* Левая пустая колонка */}
            <div className={styles.columnEmpty}></div>
            
            {/* Правая колонка с текстом */}
            <div className={`${styles.column} last`}>
              <h5 className={`${styles.subtitle} has-mask-fill`}>
                <span>Задача</span>
              </h5>
              <p className={`${styles.text} has-animation animated`} data-delay="0">
                Создание цифровых решений, которые не только привлекательны визуально, но и эффективно решают бизнес-задачи. Мы фокусируемся на понимании потребностей пользователей и создании интуитивных интерфейсов.
              </p>
              
              <hr className={styles.divider} />
              
              <h5 className={`${styles.subtitle} has-mask-fill`}>
                <span>Подход</span>
              </h5>
              <p className={`${styles.text} has-animation animated`} data-delay="100">
                Наш процесс начинается с глубокого исследования и анализа. Мы используем современные методологии дизайна и разработки, чтобы создавать продукты, которые действительно работают и приносят ценность как бизнесу, так и конечным пользователям.
              </p>
            </div>
            
            {/* Кнопка (переехала в левую часть в 3-й строке сетки по дизайну, либо справа, зависит от верстки. 
                В оригинале: <div class="one_half">...button...</div> <div class="one_half last"></div>
            */}
            <div className={styles.column}>
              <div className="button-wrap right">
                <div className={`${styles.iconWrap} icon-wrap parallax-wrap`}>
                   <div className={`${styles.buttonIcon} button-icon parallax-element`}>
                      <i className="fa fa-arrow-right"></i>
                   </div>
                </div>
                <Link href="/about" className="ajax-link" data-type="page-transition">
                   <div className={`${styles.buttonText} button-text sticky right`}>
                      <span data-hover="Узнать о нас">Узнать о нас</span>
                   </div>
                </Link>
              </div>
            </div>
             <div className={`${styles.columnEmpty} last`}></div>
          </div>
          
          <hr className={styles.divider} />
          
        </div>
      </div>
    </div>
  );
}