"use client";
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CONTENT } from '@/constants/content';
import { Button } from '@/components/ui/Button';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { heroTimeline } from '@/lib/animations';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const tl = gsap.timeline();
    heroTimeline(tl, {
      heading: '.hero-heading',
      sub: '.hero-sub',
      cta: '.hero-cta'
    });
  }, { scope: containerRef });

  return (
    <SectionWrapper className="relative min-h-[110vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Background Video on Right Side */}
      <div className="absolute top-0 right-0 lg:-right-40 w-full md:w-[110vw] h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={CONTENT.assets.heroVideo} type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="mx-auto flex w-full max-w-(--spacing-container) px-6 md:px-12 relative z-10">
        <div ref={containerRef} className="w-full md:w-1/2 text-left mt-16 md:mt-0 pr-0 md:pr-10">
          <div className="hero-heading inline-flex items-center gap-3 rounded-full border border-foreground/20 bg-foreground/5 px-5 py-2.5 mb-6 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white">
            <span className="w-2 h-2 rounded-full bg-[#F5C400] animate-pulse" />
            Innovate. Integrate. Inspire.
          </div>

          <h1 className="hero-heading font-heading font-extrabold tracking-tighter text-white text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6">
            {CONTENT.hero.headline}
          </h1>

          <p className="hero-sub text-base sm:text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl leading-relaxed">
            {CONTENT.hero.subheadline}
          </p>

          <div className="hero-cta flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto rounded-full bg-[#e8b300] text-white hover:bg-[#e8b300] hover:scale-105 transition-transform duration-300 font-bold tracking-wide px-8 shadow-lg">
              {CONTENT.hero.ctaPrimary}
            </Button>
            {/* <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-white border-foreground/20 hover:bg-foreground/5 hover:scale-105 transition-transform duration-300 font-bold tracking-wide px-8">
              {CONTENT.hero.ctaSecondary}
            </Button> */}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
