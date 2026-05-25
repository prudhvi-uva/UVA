import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeUpPreset = {
  from: { opacity: 0, y: 40 },
  to:   { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
};

export const staggerChildren = (container: string | HTMLElement, staggerDelay = 0.12) => ({
  from:    { opacity: 0, y: 30 },
  to:      { opacity: 1, y: 0, duration: 0.6, stagger: staggerDelay, ease: 'power2.out' },
  trigger: container,
});

export const heroTimeline = (tl: gsap.core.Timeline, targets: Record<string, string | HTMLElement>) => {
  tl.from(targets.logo || '.logo',    { opacity: 0, y: -20, duration: 0.5 })
    .from(targets.nav || '.nav-link',     { opacity: 0, y: -20, duration: 0.4, stagger: 0.08 }, '-=0.3')
    .from(targets.heading || '.hero-heading', { opacity: 0, y: 50,  duration: 0.7, ease: 'power3.out' }, '-=0.2')
    .from(targets.sub || '.hero-sub',     { opacity: 0, y: 30,  duration: 0.6 }, '-=0.4')
    .from(targets.cta || '.hero-cta',     { opacity: 0, scale: 0.9, duration: 0.5 }, '-=0.3');
  return tl;
};

// Professional Scroll Animations
export const scrollRevealUp = (element: string | HTMLElement, delay = 0) => {
  gsap.from(element, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: 'power3.out',
    delay,
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true,
    },
  });
};

export const scrollRevealStagger = (container: string | HTMLElement, childSelector = '*') => {
  const elements = typeof container === 'string' 
    ? document.querySelectorAll(container)
    : (container as HTMLElement).querySelectorAll(childSelector);

  gsap.from(elements, {
    opacity: 0,
    y: 50,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      once: true,
    },
  });
};

export const scrollParallax = (element: string | HTMLElement, speed = -0.3) => {
  gsap.to(element, {
    y: `${speed * 100}`,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      scrub: 0.6,
      start: 'top center',
      end: 'bottom center',
      markers: false,
    },
  });
};

export const scrollRotateReveal = (element: string | HTMLElement) => {
  gsap.from(element, {
    opacity: 0,
    y: 80,
    rotation: 5,
    duration: 1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true,
    },
  });
};

export const scrollScaleReveal = (element: string | HTMLElement) => {
  gsap.from(element, {
    opacity: 0,
    scale: 0.85,
    duration: 0.9,
    ease: 'back.out(1.2)',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true,
    },
  });
};

export const textSplitScroll = (element: string | HTMLElement) => {
  gsap.from(element, {
    opacity: 0,
    y: 40,
    letterSpacing: '0.15em',
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true,
    },
  });
};
