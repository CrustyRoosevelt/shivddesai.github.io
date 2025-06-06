'use client';

import { useEffect, useRef } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimateOnScroll({ children, className = '' }: AnimateOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Find and animate any accent elements
            const accent = entry.target.querySelector('[class*="bg-light"]');
            if (accent) {
              accent.classList.add('scale-x-100');
              accent.classList.remove('scale-x-0');
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const element = elementRef.current;
    if (element) {
      // Initialize accent elements
      const accent = element.querySelector('[class*="bg-light"]');
      if (accent) {
        accent.classList.add('scale-x-0');
      }
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div 
      ref={elementRef} 
      className={`transition-all duration-700 translate-y-8 opacity-0 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
} 