"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { CONTENT } from '@/constants/content';
import { products } from '@/lib/products';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const headers = footerRef.current?.querySelectorAll('.footer-col-header');
    if (!headers) return;
    headers.forEach((header, i) => {
      const underline = header.querySelector('.header-underline');
      if (!underline) return;
      gsap.fromTo(
        underline,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 0.4, ease: 'power2.out', delay: i * 0.15,
          scrollTrigger: { trigger: footerRef.current, start: 'top 90%', once: true },
        }
      );
    });
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="border-t border-foreground/10 bg-background pt-16 pb-8">
      <div className="mx-auto max-w-(--spacing-container) px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={CONTENT.assets.logo} alt="UVA Tech Services" className="h-26 md:h-36 w-auto" />
            </Link>
            {/* <p className="font-body text-muted text-sm leading-relaxed">
              Engineering intelligent products that transform ideas into AI-powered platforms,
              autonomous agents, and robotics.
            </p> */}
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-foreground font-heading font-bold mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-3 font-body">
              {products.map((product) => (
                <li key={product.id}>
                  <Link href={`/product/${product.id}`} className="text-sm text-muted hover:text-foreground transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="md:col-span-2">
            <h4 className="footer-col-header text-foreground font-heading font-bold mb-5 uppercase tracking-wider relative inline-block">
              Offices
              <span className="header-underline absolute bottom-[-3px] left-0 w-full h-[2px] bg-foreground block" />
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* UK Office */}
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                  {CONTENT.contact.offices.uk.title}
                </p>
                <p className="font-body text-sm text-muted leading-relaxed mb-3">
                  {CONTENT.contact.offices.uk.address}
                </p>
                <div className="space-y-2">
                  <a href={`mailto:${CONTENT.contact.offices.uk.email}`} className="flex items-center gap-2 font-body text-sm text-muted hover:text-foreground transition-colors duration-200">
                    <Mail className="h-3.5 w-3.5 text-muted flex-shrink-0" />
                    {CONTENT.contact.offices.uk.email}
                  </a>
                  <a href={`tel:${CONTENT.contact.offices.uk.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 font-body text-sm text-muted hover:text-foreground transition-colors duration-200">
                    <Phone className="h-3.5 w-3.5 text-muted flex-shrink-0" />
                    {CONTENT.contact.offices.uk.phone}
                  </a>
                </div>
              </div>
              {/* IND Office */}
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                  {CONTENT.contact.offices.ind.title}
                </p>
                <p className="font-body text-sm text-muted leading-relaxed mb-3">
                  {CONTENT.contact.offices.ind.address}
                </p>
                <div className="space-y-2">
                  <a href={`mailto:${CONTENT.contact.offices.ind.email}`} className="flex items-center gap-2 font-body text-sm text-muted hover:text-foreground transition-colors duration-200">
                    <Mail className="h-3.5 w-3.5 text-muted flex-shrink-0" />
                    {CONTENT.contact.offices.ind.email}
                  </a>
                  <a href={`tel:${CONTENT.contact.offices.ind.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 font-body text-sm text-muted hover:text-foreground transition-colors duration-200">
                    <Phone className="h-3.5 w-3.5 text-muted flex-shrink-0" />
                    {CONTENT.contact.offices.ind.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body">
          <p className="text-xs text-muted">{CONTENT.footer.copyright}</p>
          <div className="flex gap-6">
            {CONTENT.footer.links.map((link, idx) => (
              <Link key={idx} href={link.href} className="text-xs text-muted hover:text-foreground transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
