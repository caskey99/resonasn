'use client';

import React from 'react';
import Link from 'next/link';
import styles from './BlogPreview.module.css';
import { BlogItem } from '@/types/data';

interface BlogPreviewProps {
  posts: BlogItem[];
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h6>/ Будьте в курсе</h6>
          <hr style={{margin: '20px 0', opacity: 0.2}} />
          <h1 className={`${styles.bigTitle} has-mask-fill no-margins`}><span>Читайте</span></h1>
          <h1 className={`${styles.bigTitle} has-mask-fill no-margins`}><span>Все новости</span></h1>
        </div>

        {/* Posts Loop */}
        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.id} className={`${styles.post} post ${post.image ? 'has-post-thumbnail' : ''}`}>
              <div className="article-wrap" style={{ width: '100%' }}>
                
                {/* Hover Reveal Image */}
                {post.image && (
                  <div className="hover-reveal">
                    <div className="hover-reveal__inner">
                      <div className="hover-reveal__img">
                        <img src={post.image} alt={post.title} />
                      </div>
                    </div>
                  </div>
                )}
                
                <Link 
                  href={`/blog`} // Пока ведем на общий блог, т.к. страницы поста еще нет
                  className="post-title ajax-link has-mask-fill" 
                  data-type="page-transition" 
                  data-color="#000"
                >
                  <span style={{ fontSize: '2rem', display: 'block' }}>{post.title}</span>
                </Link>
              </div>

              <div className={styles.postMeta}>
                <div className="entry-meta">
                   {post.categories.map((cat, idx) => (
                     <span key={idx} style={{ marginRight: 10 }}>{cat}</span>
                   ))}
                </div>
                <div className="entry-date">{post.date}</div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Text & Button */}
        <div style={{ display: 'flex', marginTop: 80, flexWrap: 'wrap' }}>
           <div className="two_fifth" style={{ width: '40%' }}>
              <hr style={{ opacity: 0.2 }} />
              <h5 className="has-mask" style={{ fontSize: '18px', lineHeight: '1.6', marginTop: 20 }}>
                 <span>Мы помогаем бизнесу внедрять инновации и оставаться актуальными для клиентов только путем разработки цифровых креативных продуктов.</span>
              </h5>
              <div className={styles.buttonBox}>
                 <Link href="/blog" className="ajax-link">
                    <span className="button-border rounded" style={{ padding: '15px 30px', border: '1px solid #000', display: 'inline-block', borderRadius: '30px' }}>
                       ЧИТАТЬ БЛОГ
                    </span>
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}