'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function MagicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 }); // Текущая позиция курсора (с лагом)
  const mouse = useRef({ x: 0, y: 0 }); // Реальная позиция мыши
  const speed = 0.35; // Коэффициент задержки (как ratio = 0.65 в оригинале, но адаптированный под ticker)

  useGSAP(() => {
    if (!cursorRef.current) return;

    // 1. Начальная установка (как в Core function)
    gsap.set(cursorRef.current, { 
      xPercent: -50, 
      yPercent: -50, 
      scale: 0.5, 
      borderWidth: '4px', 
      borderColor: '#999999', // Серый цвет по умолчанию
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999999,
      pointerEvents: 'none',
      backgroundColor: 'transparent',
      opacity: 1 // Виден по умолчанию
    });

    // 2. Основной цикл анимации (Ticker) - аналог updatePosition в common.js
    const updatePosition = () => {
      if (!cursorRef.current) return;

      // Плавная интерполяция
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      gsap.set(cursorRef.current, { x: pos.current.x, y: pos.current.y });
    };

    gsap.ticker.add(updatePosition);

    return () => {
      gsap.ticker.remove(updatePosition);
    };
  }, { scope: cursorRef });

  useEffect(() => {
    // Обновление координат мыши
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    // Логика наведения (Hover Effects) - Портировано из common.js
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const customHover = target.closest('[data-cursor="hover"]');
      
      // Определяем тип элемента
      // В common.js: ".link, .button"

      
      const isLink = target.closest('a') || target.closest('button') || target.closest('.link') || target.closest('.button');
      
      // В common.js: ".hide-ball"
      const isHidden = target.closest('.hide-ball');
      
      // В common.js: ".parallax-wrap"
      const isParallax = target.closest('.parallax-wrap');

      console.log("customHover", isParallax, isHidden, isLink, customHover,)


      if (!cursorRef.current) return;

      if (isHidden) {
        // Эффект скрытия (.hide-ball)
        gsap.to(cursorRef.current, { duration: 0.2, borderWidth: '1px', scale: 1, opacity: 0 });
      } 
      else if (isLink) {
        // Эффект ссылки (.link, .button)
        // В оригинале: scale: 1.5, opacity: 0.15, bg: rgba(153,153,153,1), border: 0px
        gsap.to(cursorRef.current, { 
          duration: 0.2, 
          borderWidth: "0px", 
          scale: 1.5, 
          backgroundColor: "rgba(153, 153, 153, 1)", 
          opacity: 0.15 
        });
      } 
      else if (isParallax) {
        // Эффект параллакса (.parallax-wrap)
        // В оригинале: scale: 2, opacity: 1, border: 2px
        gsap.to(cursorRef.current, { 
          duration: 0.3, 
          scale: 2, 
          borderWidth: '2px', 
          opacity: 1,
          borderColor: '#999999', // Или цвет темы
          backgroundColor: 'transparent'
        });
      }
    };

    // Уход с элемента (Mouse Out)
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.closest('a') || target.closest('button') || target.closest('.link') || target.closest('.button');
      const isHidden = target.closest('.hide-ball');
      const isParallax = target.closest('.parallax-wrap');

      if (!cursorRef.current) return;

      if (isLink || isHidden || isParallax) {
        // Возврат в исходное состояние
        // В оригинале: scale: 0.5, border: 4px, opacity: 1
        gsap.to(cursorRef.current, { 
          duration: 0.3, 
          borderWidth: "4px", 
          scale: 0.5, 
          backgroundColor: "transparent", 
          borderColor: "#999999", 
          opacity: 1 
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    // Используем capture phase (true), чтобы ловить события даже если они остановлены в других местах
    window.addEventListener('mouseover', onMouseOver, true);
    window.addEventListener('mouseout', onMouseOut, true);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver, true);
      window.removeEventListener('mouseout', onMouseOut, true);
    };
  }, []);

  return (
    <div 
      id="ball" 
      ref={cursorRef} 
      className="magic-cursor" // Класс для CSS если нужно, но стили заданы через JS
    />
  );
}