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
    <SectionWrapper className="relative min-h-[110vh] flex items-center justify-center pt-32 pb-20 overflow-hidden text-paper">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
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
        <div className="absolute inset-0 bg-ink/55" />
      </div>
      
      <div ref={containerRef} className="relative left-0 z-10 max-w-4xl mx-16 text-left">
        <h1 className="hero-heading font-heading font-extrabold uppercase tracking-widest text-paper text-4xl md:text-6xl leading-tight mb-8">
          INNOVATE<br/>INTEGRATE<br/>INSPIRE
        </h1>
        <p className="hero-sub text-lg md:text-xl text-paper/90 mb-10 max-w-2xl leading-relaxed">
          {CONTENT.hero.subheadline}
        </p>
        <div className="hero-cta flex flex-col sm:flex-row items-center gap-4">
          <Button size="lg" variant="primary" className="w-full sm:w-auto bg-[#F5C400] text-ink hover:bg-[#e8b300]">
            {CONTENT.hero.ctaPrimary}
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-paper border-paper hover:bg-paper hover:text-ink">
            {CONTENT.hero.ctaSecondary}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
