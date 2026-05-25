import React from 'react';
import Link from 'next/link';
import { Hexagon, Mail, Phone } from 'lucide-react';
import { CONTENT } from '@/constants/content';

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper pt-16 pb-8">
      <div className="mx-auto max-w-[var(--spacing-container)] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={CONTENT.assets.logo} alt="UVA Tech Services" className="h-[48px] w-auto" />
            </Link>
            <p className="font-body text-mist text-sm leading-relaxed mb-6">
              INNOVATE with cutting-edge technology, INTEGRATE solutions, and INSPIRE transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-ink font-heading font-bold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 font-body">
              {CONTENT.services.map((service) => (
                <li key={service.id}>
                  <Link href={service.link} className="text-sm text-mist hover:text-ink transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-1">
            <h4 className="text-ink font-heading font-bold mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 font-body">
              {CONTENT.contact.emails.map((email, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-mist">
                  <Mail className="h-4 w-4 text-ink" />
                  <a href={`mailto:${email}`} className="hover:text-ink transition-colors">{email}</a>
                </li>
              ))}
              {CONTENT.contact.phones.map((phone, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-mist">
                  <Phone className="h-4 w-4 text-ink" />
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-ink transition-colors">{phone}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices Col */}
          <div className="md:col-span-1">
            <h4 className="text-ink font-heading font-bold mb-4 uppercase tracking-wider">Offices</h4>
            <div className="space-y-4 font-body">
              <div>
                <p className="text-sm font-bold text-ink">{CONTENT.contact.offices.uk.title}</p>
                <p className="text-sm text-mist leading-relaxed mt-1">{CONTENT.contact.offices.uk.address}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-ink">{CONTENT.contact.offices.ind.title}</p>
                <p className="text-sm text-mist leading-relaxed mt-1">{CONTENT.contact.offices.ind.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-ink/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body">
          <p className="text-xs text-mist">{CONTENT.footer.copyright}</p>
          <div className="flex gap-4">
            {CONTENT.footer.links.map((link, idx) => (
              <Link key={idx} href={link.href} className="text-xs text-mist hover:text-ink transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
