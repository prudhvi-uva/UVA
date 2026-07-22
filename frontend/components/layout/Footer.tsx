"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { CONTENT } from '@/constants/content';
import { products } from '@/lib/products';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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
          scaleX: 1, duration: 0.5, ease: 'power3.out', delay: i * 0.15,
          scrollTrigger: { trigger: footerRef.current, start: 'top 90%', once: true },
        }
      );
    });
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-background text-foreground pt-24 pb-12 border-t border-foreground/10">
      <div className="relative z-10 mx-auto max-w-(--spacing-container) px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 lg:gap-12">

          {/* Brand & Intro */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center mb-4 transition-opacity hover:opacity-80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={CONTENT.assets.logo} alt="UVA Tech Services" className="h-20 md:h-36 w-auto opacity-90" />
            </Link>

            {/* Social Links below UVA Logo with line */}
            <div className="w-full pt-4 border-t border-foreground/10 flex items-center gap-4">
              <span className="font-body text-xs font-bold uppercase tracking-widest text-muted">Follow Us</span>
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 text-muted hover:text-foreground hover:border-foreground/30 hover:bg-foreground/10 transition-all duration-200">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 text-muted hover:text-foreground hover:border-foreground/30 hover:bg-foreground/10 transition-all duration-200">
                  <TwitterIcon className="w-3.5 h-3.5" />
                  <span className="sr-only">X (Twitter)</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 text-muted hover:text-foreground hover:border-foreground/30 hover:bg-foreground/10 transition-all duration-200">
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Products Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="footer-col-header text-zinc-900 font-heading font-bold mb-6 uppercase tracking-widest text-md relative inline-block">
              Products
              <span className="header-underline absolute -bottom-1.5 left-0 w-12 h-[2px] bg-zinc-900 block" />
            </h4>
            <ul className="space-y-4 font-body">
              {products.map((product) => (
                <li key={product.id}>
                  <Link href={`/product/${product.id}`} className="group flex items-center text-sm text-muted hover:text-foreground transition-colors duration-200">
                    {product.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="md:col-span-8 lg:col-span-6">
            {/* <h4 className="footer-col-header text-zinc-900 font-heading font-bold mb-6 uppercase tracking-widest text-md relative inline-block">
              Offices
              <span className="header-underline absolute -bottom-1.5 left-0 w-12 h-[2px] bg-zinc-900 block" />
            </h4> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">

              {/* UK Office */}
              <div className="group">
                <p className="footer-col-header text-zinc-900 font-heading font-bold mb-6 uppercase tracking-widest text-md relative inline-block">
                  {CONTENT.contact.offices.uk.title}
                  <span className="header-underline absolute -bottom-1.5 left-0 w-12 h-[2px] bg-zinc-900 block" />
                </p>
                <p className="font-body text-sm text-muted leading-relaxed mb-4 max-w-[220px]">
                  {CONTENT.contact.offices.uk.address}
                </p>
                <div className="space-y-3">
                  <a href={`mailto:${CONTENT.contact.offices.uk.email}`} className="flex items-center gap-3 font-body text-sm text-muted hover:text-foreground transition-colors duration-200">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 group-hover:border-foreground/30 transition-colors">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    {CONTENT.contact.offices.uk.email}
                  </a>
                  <a href={`tel:${CONTENT.contact.offices.uk.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 font-body text-sm text-muted hover:text-foreground transition-colors duration-200">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 group-hover:border-foreground/30 transition-colors">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    {CONTENT.contact.offices.uk.phone}
                  </a>
                </div>
              </div>

              {/* IND Office */}
              <div className="group">
                <p className="footer-col-header text-zinc-900 font-heading font-bold mb-6 uppercase tracking-widest text-md relative inline-block">
                  {CONTENT.contact.offices.ind.title}
                   <span className="header-underline absolute -bottom-1.5 left-0 w-12 h-[2px] bg-zinc-900 block" />
                </p>
                <p className="font-body text-sm text-muted leading-relaxed mb-4 max-w-[220px]">
                  {CONTENT.contact.offices.ind.address}
                </p>
                <div className="space-y-3">
                  <a href={`mailto:${CONTENT.contact.offices.ind.email}`} className="flex items-center gap-3 font-body text-sm text-muted hover:text-foreground transition-colors duration-200">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 group-hover:border-foreground/30 transition-colors">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    {CONTENT.contact.offices.ind.email}
                  </a>
                  <a href={`tel:${CONTENT.contact.offices.ind.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 font-body text-sm text-muted hover:text-foreground transition-colors duration-200">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 group-hover:border-foreground/30 transition-colors">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    {CONTENT.contact.offices.ind.phone}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 font-body">
          <p className="text-xs text-muted font-medium">
            &copy; {new Date().getFullYear()} {CONTENT.footer.copyright.replace(/© \d{4} /, '')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">

            {CONTENT.footer.links.map((link, idx) => (
              <Link key={idx} href={link.href} className="text-xs font-medium text-muted hover:text-foreground transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
