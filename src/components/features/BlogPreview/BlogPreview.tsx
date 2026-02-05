'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './BlogPreview.module.css';
import { BlogItem } from '@/types/data';

gsap.registerPlugin(ScrollTrigger);

interface BlogPreviewProps {
  posts: BlogItem[];
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const footerText = container.current?.querySelector(`.${styles.footerText}`);
    const bigTitle = container.current?.querySelector(`.${styles.bigTitle}`);
    
    if (footerText) {
      gsap.to(footerText, { backgroundPosition: "0% 0", ease: "none",
        scrollTrigger: { trigger: footerText, start: "top 90%", end: "top 70%", scrub: true }
      });
    }
    if (bigTitle) {
      gsap.to(bigTitle, { backgroundPosition: "0% 0", ease: "none",
        scrollTrigger: { trigger: bigTitle, start: "top 85%", end: "top 65%", scrub: true }
      });
    }

    const postElements = container.current?.querySelectorAll(`.${styles.post}`);
    postElements?.forEach((post) => {
      const title = post.querySelector(`.${styles.postTitle}`);
      const meta = post.querySelector(`.${styles.postMeta}`);
      const scrollConfig = { start: "top 95%", end: "top 80%", scrub: true };
      if (title) gsap.to(title, { backgroundPosition: "0% 0", ease: "none", scrollTrigger: { trigger: title, ...scrollConfig } });
      if (meta) gsap.to(meta, { backgroundPosition: "0% 0", ease: "none", scrollTrigger: { trigger: meta, ...scrollConfig } });

      
     const imageReveal = post.querySelector(`.${styles.postImageReveal}`);
      const image = post.querySelector(`.${styles.postImage}`);

      if (imageReveal && image) {
        const tl = gsap.timeline({ paused: true });
        
        tl.to(imageReveal, {
          width: 220, 
          marginRight: 30, 
          duration: 0.8,
          ease: "power3.out"
        })
        .to(image, {
          scale: 1.05, 
          duration: 0.8,
          ease: "power3.out"
        }, 0); 

        post.addEventListener('mouseenter', () => tl.play());
        post.addEventListener('mouseleave', () => tl.reverse());

        return () => {
          post.removeEventListener('mouseenter', () => tl.play());
          post.removeEventListener('mouseleave', () => tl.reverse());
        };
      }
    });

  }, { scope: container });

  return (
    <section className={styles.section} ref={container}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.label}>/ Будьте в курсе</span>
          <h1 className={styles.bigTitle}>Читайте<br />Все новости<span className={styles.circleIcon}></span></h1>
        </div>

        <div className={styles.blogList}>
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className={styles.post}>
              
              <div className={styles.postLeft}>
                {post.image && (
                  <div className={styles.postImageReveal}>
                    <img src={post.image} alt={post.title} className={styles.postImage} />
                  </div>
                )}
                <h2 className={styles.postTitle}>{post.title}</h2>
              </div>

              <div className={styles.postMeta}>
                <div className={styles.categories}>{post.categories.join(' / ')}</div>
                <div className={styles.date}>{post.date}</div>
              </div>

            </Link>
          ))}
        </div>

        <div className={styles.footerRow}>
           <div className={styles.footerCol}>
              <hr style={{ opacity: 0.2, marginBottom: 30 }} />
              <h5 className={styles.footerText}>Мы помогаем бизнесу внедрять инновации и оставаться актуальными для клиентов только путем разработки цифровых креативных продуктов.</h5>
              <div className={styles.buttonBox}>
                 <Link href="/blog" className={styles.footerButton}>ЧИТАТЬ БЛОГ</Link>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}