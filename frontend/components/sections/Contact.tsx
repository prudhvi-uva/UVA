"use client";
import React from 'react';
import { CONTENT } from '@/constants/content';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function Contact() {
  return (
    <SectionWrapper id="contact-us" className="relative bg-paper py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={CONTENT.assets.images.contact} 
          alt="Contact Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-paper/90" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="reveal-item">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-ink mb-6 leading-tight">
            {CONTENT.contact.heading}
          </h2>
          <p className="font-body text-lg text-mist mb-8 leading-relaxed">
            {CONTENT.contact.subheading}
          </p>
          
          <div className="mt-12 p-6 bg-ink border border-ink/10 rounded-2xl">
            <p className="text-paper font-body font-medium italic text-lg leading-relaxed">
              {CONTENT.quote.text}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="reveal-item p-8 md:p-10 shadow-xl shadow-ink/10 bg-paper border border-ink/5">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="font-body text-sm font-medium text-ink">First Name</label>
                <input 
                  id="firstName"
                  type="text" 
                  className="w-full h-11 px-4 rounded-md bg-paper border border-ink/20 text-ink focus:outline-none focus:ring-2 focus:ring-ink transition-all"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="font-body text-sm font-medium text-ink">Last Name</label>
                <input 
                  id="lastName"
                  type="text" 
                  className="w-full h-11 px-4 rounded-md bg-paper border border-ink/20 text-ink focus:outline-none focus:ring-2 focus:ring-ink transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="font-body text-sm font-medium text-ink">Email Address</label>
              <input 
                id="email"
                type="email" 
                className="w-full h-11 px-4 rounded-md bg-paper border border-ink/20 text-ink focus:outline-none focus:ring-2 focus:ring-ink transition-all"
                placeholder="john@company.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="font-body text-sm font-medium text-ink">Message</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full p-4 rounded-md bg-paper border border-ink/20 text-ink focus:outline-none focus:ring-2 focus:ring-ink transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>

      </div>
    </SectionWrapper>
  );
}
