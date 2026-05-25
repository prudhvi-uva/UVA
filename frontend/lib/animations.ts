import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
