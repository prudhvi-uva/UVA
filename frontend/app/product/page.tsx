import React from 'react';
import { CONTENT } from '@/constants/content';
import { Navbar } from '@/components/layout/Navbar';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: CONTENT.productPage.title,
  description: CONTENT.productPage.description,
};

export default function ProductPage() {
  const { hero, intro, tiers, whyChoose, testimonial, cta } = CONTENT.product;

  return (
    <main className="min-h-screen bg-paper text-ink flex flex-col selection:bg-ink selection:text-paper">
      <Navbar />

      {/* Hero Section */}
      <SectionWrapper className="pt-32 pb-16 md:pt-40 md:pb-24 grow border-b border-ink/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-ink text-paper text-center py-2 px-6 rounded-b-3xl font-bold tracking-wide text-sm z-20">
          {hero.banner}
        </div>
        
        <div className="max-w-4xl mx-auto text-center mt-8 mb-20 reveal-item relative z-10">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-mist uppercase tracking-widest mb-4">
            {hero.headline}
          </h2>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-wide mb-6 leading-tight">
            {hero.subheadline}
          </h1>
          <p className="font-body text-lg md:text-xl text-ink max-w-3xl mx-auto leading-relaxed mb-8">
            {hero.description}
          </p>
          <Button variant="primary" size="lg" className="rounded-full uppercase tracking-widest px-10">
            {cta.button}
          </Button>
        </div>
      </SectionWrapper>

      {/* Intro Section */}
      <SectionWrapper className="bg-ink text-paper py-24">
        <div className="max-w-4xl mx-auto text-center reveal-item">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-wide mb-8">
            {intro.headline}
          </h2>
          <p className="font-body text-xl md:text-2xl text-paper/80 leading-relaxed font-light">
            {intro.description}
          </p>
        </div>
      </SectionWrapper>

      {/* Tiers / Products */}
      <SectionWrapper className="bg-paper text-ink py-24 border-b border-ink/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className="group bg-paper border border-ink/20 p-8 rounded-3xl hover:border-ink transition-colors duration-300 reveal-item flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-6">{tier.icon}</div>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mb-4">
                {tier.name}
              </h3>
              <p className="font-body text-mist text-base leading-relaxed mb-6 grow">
                {tier.description}
              </p>
              <div className="bg-ink/5 p-4 rounded-xl">
                <span className="font-bold text-sm uppercase tracking-wide block mb-1">Ideal For:</span>
                <span className="font-body text-sm text-ink">{tier.ideal}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose & Testimonial */}
      <SectionWrapper className="bg-paper text-ink py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal-item">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-wide mb-10">
              {whyChoose.headline}
            </h2>
            <ul className="space-y-6">
              {whyChoose.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4 font-body text-lg text-ink">
                  <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ink text-paper p-10 md:p-16 rounded-3xl reveal-item" style={{ animationDelay: '200ms' }}>
            <svg className="w-12 h-12 text-paper/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-body text-xl md:text-2xl font-light italic leading-relaxed mb-8">
              {testimonial.quote}
            </p>
            <p className="font-heading font-bold uppercase tracking-widest text-sm text-paper/70">
              {testimonial.author}
            </p>
          </div>

        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-ink text-paper py-32 text-center">
        <div className="max-w-3xl mx-auto reveal-item">
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-wide mb-10 leading-tight">
            {cta.headline}
          </h2>
          <Link href="/#contact">
            <Button variant="primary" size="lg" className="rounded-full uppercase tracking-widest px-12 py-6 bg-paper text-ink hover:bg-paper/90 border-0">
              {cta.button}
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </main>
  );
}
