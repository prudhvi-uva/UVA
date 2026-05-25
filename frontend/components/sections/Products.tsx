import React from 'react';
import { CONTENT } from '@/constants/content';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { ArrowRight, BarChart3, Sparkles, Store, Zap } from 'lucide-react';
import Link from 'next/link';

export function Products() {
  const productHighlights = [
    { icon: <Store className="h-5 w-5" />, label: 'Commerce control' },
    { icon: <BarChart3 className="h-5 w-5" />, label: 'Real-time insight' },
    { icon: <Zap className="h-5 w-5" />, label: 'Launching soon' },
  ];

  return (
    <SectionWrapper id="products" className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div className="reveal-item max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 mb-6 text-xs font-bold uppercase tracking-widest text-mist">
            <Sparkles className="h-4 w-4 text-ink" />
            Product Lab
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-ink mb-6 leading-tight">
            {CONTENT.products.heading}
          </h2>

          <p className="font-body text-lg md:text-xl text-mist mb-5 leading-relaxed">
            {CONTENT.products.subheading}
          </p>

          <p className="font-body text-base text-ink/75 mb-10 leading-relaxed">
            {CONTENT.products.teaser}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {productHighlights.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-xl border border-ink/10 bg-ink/3 px-4 py-3">
                <span className="text-ink">{item.icon}</span>
                <span className="font-body text-sm font-semibold text-ink">{item.label}</span>
              </div>
            ))}
          </div>

          <Link href="/product">
            <Button size="lg" variant="primary" className="group uppercase tracking-widest font-semibold px-10">
              {CONTENT.products.cta}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="reveal-item relative" style={{ animationDelay: '120ms' }}>
          <div className="relative min-h-115 overflow-hidden rounded-3xl bg-ink text-paper shadow-2xl shadow-ink/20">
            <img
              src={CONTENT.assets.images.aiIntro}
              alt="AI product preview"
              className="absolute inset-0 h-full w-full object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-linear-to-br from-ink via-ink/80 to-ink/35" />

            <div className="relative z-10 flex min-h-115 flex-col justify-between p-8 md:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-paper/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-paper/80">
                  DealPulse 360
                </span>
                <span className="font-body text-sm text-paper/70">Coming soon</span>
              </div>

              <div>
                <p className="font-heading text-2xl md:text-4xl font-extrabold uppercase tracking-wide leading-tight mb-5">
                  Smarter retail operations in one platform.
                </p>
                <div className="grid grid-cols-3 gap-3 border-t border-paper/15 pt-6">
                  {['Store', 'POS', 'Insights'].map((item) => (
                    <div key={item}>
                      <p className="font-heading text-lg font-bold text-paper">{item}</p>
                      <p className="font-body text-xs uppercase tracking-widest text-paper/55">Ready</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
