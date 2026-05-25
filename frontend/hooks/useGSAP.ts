import { useGSAP } from '@gsap/react';
import { useRef, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins (only needed once, but safe to call multiple times)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal(selector: string): RefObject<HTMLElement | null> {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll(selector);
    if (!elements?.length) return;

    gsap.from(elements, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true,          // Animate only once
      },
    });
  }, { scope: containerRef });

  return containerRef;
}
