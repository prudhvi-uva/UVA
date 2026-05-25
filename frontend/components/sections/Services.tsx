import React from 'react';
import { CONTENT } from '@/constants/content';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { ArrowRight, Database, Cpu, Shield, Code } from 'lucide-react';
import Link from 'next/link';

// Simple icon map based on ID
const iconMap: Record<string, React.ReactNode> = {
  'data-analytics': <Database className="h-8 w-8" />,
  'embedded-solutions': <Cpu className="h-8 w-8" />,
  'cybersecurity': <Shield className="h-8 w-8" />,
  'web-app': <Code className="h-8 w-8" />,
};

export function Services() {
  return (
    <SectionWrapper id="services" className="relative bg-ink">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src={CONTENT.assets.serviceVideo} type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <div className="relative z-10">
        <div className="mb-16 text-center reveal-item">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-paper uppercase tracking-wide mb-4">Our Services</h2>
          <p className="text-paper/80 max-w-2xl mx-auto font-body">
            Delivering cutting-edge technology solutions to empower businesses and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CONTENT.services.map((service) => (
            <Link href={service.link} key={service.id} className="reveal-item block group">
              <div className="h-full p-8 rounded-2xl bg-paper/5 backdrop-blur-md border border-paper/10 transition-all duration-300 hover:-translate-y-1 hover:bg-paper/10 hover:border-paper/20">
                <div className="mb-6 text-paper/90 group-hover:text-paper transition-colors">
                  {iconMap[service.id]}
                </div>
                <h3 className="font-heading text-xl font-bold text-paper mb-3">
                  {service.title}
                </h3>
                <p className="text-paper/70 font-body leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-bold text-paper/90 group-hover:text-paper transition-colors uppercase tracking-wider">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
