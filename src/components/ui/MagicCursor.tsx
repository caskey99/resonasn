'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function MagicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const animate = () => {
    delayedMouse.current.x = lerp(delayedMouse.current.x, mouse.current.x, 0.15);
    delayedMouse.current.y = lerp(delayedMouse.current.y, mouse.current.y, 0.15);

    if (cursorRef.current) {
      gsap.set(cursorRef.current, {
        x: delayedMouse.current.x,
        y: delayedMouse.current.y,
      });
    }
    rafId.current = window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    animate();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useGSAP(() => {
    const cursor = cursorRef.current;
    const textEl = textRef.current;
    if (!cursor || !textEl) return;

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // 1. Текст
      const textTrigger = target.closest('[data-cursor-text]');
      
      // 2. Ссылки
      const linkTrigger = target.closest('a');

      // 3. Магниты/Кнопки
      const hoverTrigger = target.closest('[data-cursor="hover"]') || target.closest('button');
      const isMagnetic = hoverTrigger && !linkTrigger;

      // 4. Скрытие
      const isHidden = target.closest('.hide-ball');

      // --- ИСПРАВЛЕНИЕ БАГА ЗДЕСЬ ---
      if (isHidden) {
        gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
        return; // Прерываем выполнение, если скрыт
      } else {
        // Явно возвращаем scale в 1, иначе он останется 0 после выхода из скрытой зоны
        gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.3 });
      }

      // СЦЕНАРИЙ: ТЕКСТ
      if (textTrigger) {
        const text = textTrigger.getAttribute('data-cursor-text');
        textEl.innerText = text || 'VIEW';
        gsap.to(cursor, {
          width: 90, height: 90,
          scale: 1, // Гарантируем масштаб
          backgroundColor: '#fff', 
          borderWidth: 0,
          duration: 0.4, ease: 'power3.out'
        });
        gsap.to(textEl, { opacity: 1, scale: 1, duration: 0.3 });
        return;
      }

      // СЦЕНАРИЙ: ССЫЛКА
      if (linkTrigger) {
        gsap.to(cursor, {
          width: 60, height: 60,
          scale: 1, // Гарантируем масштаб
          backgroundColor: '#fff', 
          borderWidth: 0,
          duration: 0.3
        });
        gsap.to(textEl, { opacity: 0 });
        return;
      }

      // СЦЕНАРИЙ: МАГНИТ
      if (isMagnetic) {
        gsap.to(cursor, {
          width: 50, height: 50,
          scale: 1, // Гарантируем масштаб
          backgroundColor: 'transparent', 
          borderWidth: '2px', 
          borderColor: 'rgba(255,255,255,1)', 
          duration: 0.3
        });
        gsap.to(textEl, { opacity: 0 });
        return;
      }

      // СЦЕНАРИЙ: ОБЫЧНЫЙ
      gsap.to(cursor, {
        width: 30, height: 30,
        scale: 1, // Гарантируем масштаб
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderColor: 'rgba(255,255,255,0.8)',
        duration: 0.3
      });
      gsap.to(textEl, { opacity: 0 });
    };

    window.addEventListener('mouseover', onMouseOver);
    return () => window.removeEventListener('mouseover', onMouseOver);
  }, { scope: cursorRef });

  return (
    <div ref={cursorRef} className="magic-cursor">
      <div ref={textRef} className="cursor-text"></div>
    </div>
  );
}