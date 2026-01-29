'use client';

import { ReactNode, useLayoutEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollContext from '@/context/ScrollContext';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useLayoutEffect(() => {
    // 1. Инициализация Lenis
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease Out Quart
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    setLenis(lenisInstance);

    // 2. Синхронизация: обновляем ScrollTrigger при скролле Lenis
    lenisInstance.on('scroll', ScrollTrigger.update);

    // 3. Интеграция в GSAP Ticker
    // Важно: создаем именованную функцию для корректного удаления
    const update = (time: number) => {
      lenisInstance.raf(time * 1000);
    };

    // Отключаем встроенную задержку GSAP для синхронности
    gsap.ticker.lagSmoothing(0);
    
    // Добавляем слушатель
    gsap.ticker.add(update);

    // 4. Cleanup Function
    return () => {
      gsap.ticker.remove(update);
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ lenis }}>
      {children}
    </ScrollContext.Provider>
  );
}