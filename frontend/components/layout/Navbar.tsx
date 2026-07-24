"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { CONTENT } from '@/constants/content';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  const [, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hasDarkHero = true;
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
          {CONTENT.nav.map((item) => {
            if (item.isDropdown) {
              return (
                <div
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setDesktopDropdownOpen((prev) => !prev)}
                    className={cn(
                      "nav-link inline-flex items-center gap-1.5 font-body text-base font-bold uppercase tracking-wider transition-colors duration-300 text-zinc-900 cursor-pointer",
                      hasDarkHero ? "hover:text-white" : "hover:text-zinc-600"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", desktopDropdownOpen && "rotate-180")} />
                  </button>

                  {/* Dropdown Menu Panel */}
                  <div
                    className={cn(
                      "absolute top-full right-0 w-72 pt-2 transition-all duration-200",
                      desktopDropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="bg-background border border-foreground/15 rounded-2xl p-3 shadow-xl space-y-1">
                      {products.map((prod) => (
                        <Link
                          key={prod.id}
                          href={`/product/${prod.id}`}
                          className="flex flex-col p-2.5 rounded-xl transition-colors hover:bg-foreground/10 group/item"
                          onClick={() => setDesktopDropdownOpen(false)}
                        >
                          <span className="font-heading text-sm font-bold uppercase tracking-wide text-foreground group-hover/item:text-foreground">
                            {prod.name}
                          </span>
                          <span className="font-body text-xs text-foreground/70">
                            {prod.eyebrow}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "nav-link font-body text-base font-bold uppercase tracking-wider transition-colors duration-300 text-zinc-900 ",
                  hasDarkHero ? "hover:text-white hover:border-b-3" : "hover:text-zinc-600 hover:border-b-1"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Link href="/#contact-us" className="hidden md:inline-block">
            <Button
              variant="primary"
              size="md"
              className={cn(
                "hidden md:flex transition-all duration-300 bg-black text-white hover:bg-white hover:text-black font-bold cursor-pointer shadow-md hover:scale-105"
              )}
            >
              Get in touch
            </Button>
          </Link>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className={cn("md:hidden transition-colors duration-300", isTransparent ? "text-background" : "text-foreground")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-foreground/10 py-4 px-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {CONTENT.nav.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.label} className="flex flex-col gap-2">
                    <button
                      className="flex items-center justify-between text-lg font-bold uppercase tracking-wider text-foreground hover:text-muted transition-colors py-1"
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", mobileProductsOpen && "rotate-180")} />
                    </button>
                    {mobileProductsOpen && (
                      <div className="pl-4 flex flex-col gap-3 border-l-2 border-foreground/15 py-1">
                        {products.map((prod) => (
                          <Link
                            key={prod.id}
                            href={`/product/${prod.id}`}
                            className="flex flex-col text-sm font-bold uppercase tracking-wider text-foreground hover:text-muted transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span>{prod.name}</span>
                            <span className="text-xs font-normal normal-case text-foreground/60">{prod.eyebrow}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-bold uppercase tracking-wider text-foreground hover:text-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/#contact-us" onClick={() => setMobileMenuOpen(false)} className="w-full mt-4 block">
              <Button variant="primary" size="md" className="w-full bg-black text-white hover:bg-zinc-800 hover:text-white hover:border-2 hover:border-zinc-800 font-bold shadow-md">
                Get in touch
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
