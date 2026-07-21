"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ComponentType, CSSProperties } from "react";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  Brain,
  Eye,
  Home,
  Link2,
  MessageCircle,
  Move,
  Plug,
  Rocket,
  Store,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SignalWaveform } from "@/components/ui/SignalWaveform";
import { products, type ProductHighlight } from "@/lib/products";
import { cn } from "@/lib/utils";

const highlightIcons: Record<ProductHighlight["icon"], ComponentType<{ className?: string }>> = {
  rocket: Rocket,
  store: Store,
  chart: BarChart3,
  zap: Zap,
  link: Link2,
  bot: Bot,
  brain: Brain,
  workflow: Workflow,
  trending: TrendingUp,
  plug: Plug,
  eye: Eye,
  message: MessageCircle,
  home: Home,
  move: Move,
  blocks: Blocks,
};

function productStyle(accent: string): CSSProperties {
  return {
    "--accent": accent,
  } as CSSProperties;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Products() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const articles = gsap.utils.toArray<HTMLElement>(".product-article");
    
    articles.forEach((article) => {
      const visual = article.querySelector(".product-visual");
      const textContent = article.querySelector(".reveal-item:not(.product-visual)");

      // Text content reveal
      if (textContent) {
        gsap.from(textContent, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: article,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Visual reveal (simple fade up)
      if (visual) {
        gsap.from(visual, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: article,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  }, { scope: container });

  return (
    <SectionWrapper
      id="products"
      className="relative overflow-visible bg-paper py-0 text-ink"
      revealSelector="none"
    >
      <div className="sticky top-0 z-20 -mx-6 border-b border-ink/10 bg-paper/95 px-6 py-3 backdrop-blur md:-mx-12 md:px-12">
        <nav
          aria-label="Product quick links"
          className="mx-auto flex w-full max-w-(--spacing-container) items-center justify-between"
        >

          {/* Product pills */}
          <div className="flex items-center gap-2 overflow-x-auto">
            {products.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className="rounded-full border border-ink/20 px-4 py-1.5 font-body text-[11px] font-bold uppercase tracking-widest text-ink transition-colors hover:border-ink hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                style={productStyle(product.accent)}
              >
                {product.name}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="divide-y divide-ink/10" ref={container}>
        {products.map((product, index) => {
          const visualFirst = index !== 1;

          return (
            <article
              key={product.id}
              id={product.id}
              className="product-article scroll-mt-20 py-16 md:py-20 relative"
              style={productStyle(product.accent)}
            >
              {/* Background Signal Waveform */}
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-15 overflow-hidden">
                <SignalWaveform
                  variant={product.signal}
                  color={product.accent}
                  className="!h-full !w-full !min-h-0 !scale-[2] !rounded-none !border-none !bg-transparent"
                />
              </div>

              <div
                className={cn(
                  "relative z-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12",
                  !visualFirst && "lg:[&>.sticky-wrapper]:order-2",
                )}
              >
                <div className="sticky-wrapper lg:sticky lg:top-32">
                  <div className="product-visual">
                    {product.id === "pardha" ? (
                      <div className="aspect-[4/3] lg:aspect-auto lg:h-[320px] w-full overflow-hidden rounded-3xl border border-ink/10 bg-ink shadow-[0_24px_80px_rgba(20,22,28,0.07)]">
                        <video 
                          src="/pardha.mp4" 
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                          className="h-full w-full object-cover" 
                        />
                      </div>
                    ) : (
                      <SignalWaveform
                        variant={product.signal}
                        color={product.accent}
                        className="shadow-[0_24px_80px_rgba(20,22,28,0.07)]"
                      />
                    )}
                  </div>
                </div>

                <div className="reveal-item">
                  {/* text-[var(--accent)] */}
                  <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.22em] ">
                    {product.eyebrow}
                  </p>
                  <h2 className="font-heading text-5xl font-extrabold uppercase leading-none tracking-wide text-ink md:text-7xl">
                    {product.name}
                  </h2>
                  <p className="mt-5 max-w-2xl font-body text-lg leading-8 text-ink/80">
                    {product.thesis}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {product.perfectFor.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink/10 bg-ink/3 px-3 py-2 font-body text-[11px] font-bold uppercase tracking-widest text-mist"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/product/${product.id}`}
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#e8b300] px-8 py-3.5 font-body text-base font-bold tracking-wide text-ink shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#e8b300]"
                  >
                    {product.cta}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
