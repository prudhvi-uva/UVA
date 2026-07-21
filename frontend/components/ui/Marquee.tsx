import React from "react";
import { cn } from "@/lib/utils";

const ITEMS = [
  "Dp360 for cafe's",
  "Dp360 for FMCG",
  "Dp360 as e-commerce",
  "Pardha - founder's executive agentic AI",
  "Aura - Robotics Intelligence",
];

export function Marquee() {
  return (
    <section className="w-full py-12 md:py-20 flex flex-col justify-center overflow-hidden bg-background">
      {/* Header Content above Marquee */}
      <div className="relative z-20 mb-12 flex flex-col items-center text-center px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-4 py-1.5 mb-4 text-[10px] font-bold uppercase tracking-widest text-muted">
          The UVA Ecosystem
        </div>
        <h3 className="font-heading text-2xl md:text-4xl font-black uppercase tracking-tight text-foreground">
          Powering Next-Generation Solutions
        </h3>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        
        {/* Subtle gradient masks for the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 lg:w-1/3 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/4 lg:w-1/3 bg-gradient-to-l from-background to-transparent" />

        {/* 
          Massive Kinetic Typography Track 
        */}
        <div className="group flex w-full gap-16 overflow-hidden">
          <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-16 group-hover:[animation-play-state:paused]">
            {ITEMS.map((item, i) => (
              <div key={`track1-${i}`} className="flex items-center gap-16">
                <span className="whitespace-nowrap font-heading text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground/10 transition-colors duration-300 hover:text-foreground cursor-default">
                  {item}
                </span>
                <span className="text-4xl md:text-6xl lg:text-7xl text-foreground/20">✦</span>
              </div>
            ))}
          </div>
          
          {/* Duplicate for seamless looping */}
          <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-16 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {ITEMS.map((item, i) => (
              <div key={`track2-${i}`} className="flex items-center gap-16">
                <span className="whitespace-nowrap font-heading text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground/10 transition-colors duration-300 hover:text-foreground cursor-default">
                  {item}
                </span>
                <span className="text-4xl md:text-6xl lg:text-7xl text-foreground/20">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
