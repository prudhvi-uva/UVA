"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useGSAP';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  revealSelector?: string;
}

export function SectionWrapper({ 
  id, 
  className, 
  children,
  revealSelector = ".reveal-item",
  ...props 
}: SectionWrapperProps) {
  const containerRef = useScrollReveal(revealSelector);

  return (
    <section
      id={id}
      ref={containerRef as React.RefObject<HTMLElement>}
      className={cn("w-full py-section px-6 md:px-12", className)}
      {...props}
    >
      <div className="mx-auto max-w-(--spacing-container) w-full">
        {children}
      </div>
    </section>
  );
}
