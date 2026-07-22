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
import { DecorativeArrow } from "@/components/ui/DecorativeArrow";
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

export function Products() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper
      id="products"
      className=" relative overflow-visible bg-background py-0 text-foreground"
      revealSelector="none"
    >
      {/* Products Section Header */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center px-6 pb-20 md:px-12">

        {/* The Massive Scribble Arrow Background */}
        {/* <DecorativeArrow className="absolute left-1/2 top-1/2 w-[200%] md:w-[140%] max-w-none -translate-x-1/2 -translate-y-[60%] -rotate-6 text-[#ff4f33] opacity-[0.2] pointer-events-none z-0" /> */}

        {/* <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#ff4f33] bg-inc-900/5 px-4 py-1.5 mb-4 text-[15px] font-bold uppercase tracking-widest text-[#ff4f33]">
          Our Solutions
        </div> */}
        <h2 className="relative z-10 font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
          Discover The Products
        </h2>
        <p className="relative z-10 mt-6 text-foreground/70 text-sm md:text-base max-w-2xl">
          From advanced robotics intelligence to executive AI agents and next-generation e-commerce platforms, explore our cutting-edge products designed to accelerate the future.
        </p>
      </div>     
      <div className="divide-y divide-foreground/10 border-t border-foreground/10" ref={container}>
        {products.map((product, index) => {
          const isEven = index % 2 === 0;

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

              <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
                <div className={cn("lg:top-32", !isEven && "lg:order-2")}>
                  <div className="product-visual">
                    {product.id === "pardha" ? (
                      <div className="aspect-[4/3] lg:aspect-auto lg:h-[360px] w-full overflow-hidden rounded-3xl  bg-foreground shadow-[0_24px_80px_rgba(20,22,28,0.07)]">
                        <video
                          src="/pardha.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : product.id === "dp360" ? (
                      <div className="aspect-[4/3] lg:aspect-auto lg:h-[360px] w-full overflow-hidden rounded-3xl bg-foreground shadow-[0_24px_80px_rgba(20,22,28,0.07)]">
                        <video
                          src="/Dp360_glimpse.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] lg:aspect-auto lg:h-[360px] w-full overflow-hidden rounded-3xl bg-foreground shadow-[0_24px_80px_rgba(20,22,28,0.07)]">
                        <img
                          src="/Aura_glimpse.png"
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className={cn("reveal-item", !isEven && "lg:order-1")}>
                  {/* text-[var(--accent)] */}
                  <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.22em] ">
                    {product.eyebrow}
                  </p>
                  <h2 className="font-heading text-5xl font-extrabold uppercase leading-none tracking-wide text-foreground md:text-7xl">
                    {product.name}
                  </h2>
                  <p className="mt-5 max-w-2xl font-body text-lg leading-8 text-foreground/80">
                    {product.thesis}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {product.perfectFor.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-foreground/10 bg-foreground/3 px-3 py-2 font-body text-[11px] font-bold uppercase tracking-widest text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/product/${product.id}`}
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#e8b300] px-8 py-3.5 font-body text-base font-bold tracking-wide text-foreground shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#e8b300]"
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
