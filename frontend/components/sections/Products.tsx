import React from 'react';
import { CONTENT } from '@/constants/content';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { Sparkles } from 'lucide-react';

export function Products() {
  return (
    <SectionWrapper id="products" className="relative bg-ink text-paper py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={CONTENT.assets.images.aiIntro} 
          alt="Product Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
      </div>
      
      <div className="reveal-item max-w-4xl mx-auto text-left relative z-10 px-6">
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-paper mb-6 leading-tight">
          {CONTENT.products.heading}
        </h2>
        
        <p className="font-body text-xl md:text-2xl text-paper mb-4 leading-relaxed">
          {CONTENT.products.subheading}
        </p>

        <p className="font-body text-sm md:text-base text-paper mb-10">
          {CONTENT.products.teaser}
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Button size="lg" variant="primary" className="uppercase tracking-widest font-semibold text-paper bg-[#617577] border-0 hover:bg-[#2B231F] rounded-full px-12 py-6">
            {CONTENT.products.cta}
          </Button>

          <p className="font-body text-3xl text-paper tracking-widest">
            {CONTENT.products.rating}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
