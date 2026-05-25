import React from 'react';
import { CONTENT } from '@/constants/content';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ArrowRight, Code, Cpu, Database, Shield } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  'data-analytics': <Database className="h-7 w-7" />,
  'embedded-solutions': <Cpu className="h-7 w-7" />,
  cybersecurity: <Shield className="h-7 w-7" />,
  'web-app': <Code className="h-7 w-7" />,
};

export function Services() {
  return (
    <SectionWrapper id="services" className="relative bg-ink text-paper py-24 md:py-32 overflow-hidden">
      <div className="mb-14 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-16 items-end reveal-item">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-paper/50 mb-5">
            Capability Map
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-wide leading-tight">
            Our Services
          </h2>
        </div>

        <p className="font-body text-lg md:text-xl text-paper/70 leading-relaxed max-w-3xl lg:ml-auto">
          Delivering cutting-edge technology solutions to empower businesses and drive innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-10 items-start">
        <div className="reveal-item xl:sticky xl:top-28">
          <div className="relative min-h-[420px] overflow-hidden bg-paper text-ink">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={CONTENT.assets.serviceVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-ink/35" />

            <div className="absolute bottom-0 left-0 right-0 bg-paper p-7 md:p-8">
              <p className="font-heading text-xs font-bold uppercase tracking-widest text-mist mb-3">
                Engineering Stack
              </p>
              <div className="grid grid-cols-2 gap-px bg-ink/10">
                {['Data', 'Embedded', 'Security', 'Apps'].map((item) => (
                  <div key={item} className="bg-paper px-4 py-4">
                    <p className="font-heading text-xl font-extrabold text-ink">{item}</p>
                    <p className="font-body text-xs uppercase tracking-widest text-mist">Delivery</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="reveal-item border-y border-paper/15">
          {CONTENT.services.map((service, index) => (
            <Link href={service.link} key={service.id} className="group block">
              <div className="relative grid grid-cols-[auto_1fr] md:grid-cols-[5rem_auto_1fr_auto] items-start gap-5 border-b border-paper/15 py-7 transition-all duration-300 last:border-b-0 hover:bg-paper/6 md:gap-7">
                <span className="absolute bottom-0 left-0 top-0 w-1 bg-paper scale-y-0 transition-transform duration-300" />

                <span className="font-heading text-3xl md:text-4xl font-extrabold leading-none text-paper/35 transition-colors group-hover:text-paper/70">
                  0{index + 1}
                </span>

                <div className="flex h-12 w-12 items-center justify-center border border-paper/20 text-paper transition-all duration-300 ">
                  {iconMap[service.id]}
                </div>

                <div className="col-span-2 md:col-span-1 md:pt-1">
                  <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-wide text-paper transition-colors group-hover:text-paper mb-3">
                    {service.title}
                  </h3>

                  <p className="font-body text-paper/65 leading-relaxed max-w-3xl transition-colors group-hover:text-paper/82">
                    {service.description}
                  </p>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center border border-paper/20 text-paper transition-all duration-300 group-hover:border-paper group-hover:bg-paper group-hover:text-ink md:flex">
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
