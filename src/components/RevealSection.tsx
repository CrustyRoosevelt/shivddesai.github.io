'use client';

import { useEffect, useRef } from 'react';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function RevealSection({ children, className = '' }: RevealSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className={`opacity-0 translate-y-8 will-change-transform ${className}`}
    >
      {children}
    </div>
  );
} 