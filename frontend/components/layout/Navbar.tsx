"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { CONTENT } from '@/constants/content';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  const [, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the current page has a dark hero background video/color
  const hasDarkHero = pathname === '/' || pathname === '/uva-leadership' || pathname === '/uva-careers';

  // We want transparent header at top ONLY on pages with dark hero backgrounds
  // const isTransparent = hasDarkHero && !isScrolled;
  const isTransparent = true;

  return (
    <header
      className={cn(
        "absolute top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent py-2" 
      )}
    >
      <div className="mx-auto flex max-w-(--spacing-container) items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="logo flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={CONTENT.assets.logo} 
            alt="UVA Tech Services" 
            className={cn(
              "w-auto transition-all duration-300 h-34"
            )} 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {CONTENT.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "nav-link font-body text-base font-bold uppercase tracking-wider transition-colors duration-300 text-ink",
                hasDarkHero?"hover:text-white hover:border-b-3":"hover:text-zinc-600 hover:border-b-1"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button 
            variant="primary" 
            size="md" 
            className={cn(
              "hidden md:flex transition-all duration-300 bg-ink text-paper hover:bg-ink/90"
            )}
          >
            Enquire now
          </Button>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            className={cn("md:hidden transition-colors duration-300", isTransparent ? "text-paper" : "text-ink")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-paper border-b border-ink/10 py-4 px-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {CONTENT.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-bold uppercase tracking-wider text-ink hover:text-mist transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" size="md" className="w-full mt-4">
              Enquire now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
