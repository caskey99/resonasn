'use client';

import { createContext, useContext } from 'react';
import type Lenis from 'lenis';

// Интерфейс контекста
interface ScrollContextValue {
  lenis: Lenis | null;
}

// Создаем контекст с дефолтным значением
const ScrollContext = createContext<ScrollContextValue>({
  lenis: null,
});

// Кастомный хук для удобного доступа
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a SmoothScroll (Provider)');
  }
  return context;
};

export default ScrollContext;