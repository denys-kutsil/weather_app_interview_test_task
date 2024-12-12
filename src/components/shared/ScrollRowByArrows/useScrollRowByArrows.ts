import { useRef } from 'react';

export const useScrollRowByArrows = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToStart = () => {
    scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  };

  const scrollToEnd = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollWidth,
        behavior: 'smooth',
      });
    }
  };

  return { scrollContainerRef, scrollToStart, scrollToEnd };
};
