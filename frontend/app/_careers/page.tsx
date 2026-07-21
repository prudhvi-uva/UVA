import { CONTENT } from '@/constants/content';
import { Navbar } from '@/components/layout/Navbar';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

export const metadata = {
  title: "UVA Careers: Explore Job Opportunities and Apply Today | UVA Product and IT Services Limited",
  description: "Discover exciting career opportunities at UVA. Our UVA careers page allows you to apply for various positions and seek your dream job. Join our team and contribute to a vibrant work environment.",
};

export default function CareersPage() {
  const { hero, about, contact, resources } = CONTENT.careers;

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col selection:bg-foreground selection:text-background">
      <Navbar />

      {/* Hero Section */}
      <SectionWrapper className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-foreground/10 relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-muted mix-blend-multiply"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 reveal-item animate-fade-in">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-muted uppercase tracking-widest mb-4">
            Careers at UVA
          </h2>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-wide mb-6 leading-tight">
            {hero.headline}
          </h1>
          <p className="font-body text-lg md:text-xl text-background/85 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            {hero.description}
          </p>
          <a
            href="#apply"
            className="inline-block bg-background text-foreground font-heading font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full border border-background hover:bg-transparent hover:text-background transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Apply Now
          </a>
        </div>
      </SectionWrapper>

      {/* About Career Journey Section */}
      <SectionWrapper className="bg-background text-foreground py-20 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto">
          {/* First block: Split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="reveal-item">
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-wide mb-6">
                {about.heading}
              </h2>
              <div className="w-20 h-1 bg-foreground mb-6"></div>
              <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed font-light mb-6">
                {about.description1}
              </p>
            </div>
            <div className="reveal-item relative rounded-3xl overflow-hidden shadow-xl border border-foreground/10 aspect-video lg:aspect-square max-h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={about.image1.url} 
                alt={about.image1.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Second block: Mission & Goals */}
          <div className="bg-foreground/5 rounded-3xl p-8 md:p-16 border border-foreground/10">
            <div className="max-w-3xl">
              <span className="font-heading text-sm font-bold tracking-widest uppercase text-muted mb-2 block">
                {about.subheading}
              </span>
              <h3 className="font-heading text-2xl md:text-4xl font-extrabold uppercase tracking-wide mb-6">
                {about.heading2}
              </h3>
              <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
                {about.description2}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Career Resources & Portals Section */}
      <SectionWrapper className="bg-background text-foreground py-20 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-item">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-wide mb-6">
              {resources.heading}
            </h2>
            <p className="font-body text-lg md:text-xl text-foreground/75 leading-relaxed font-light">
              {resources.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Job Portal */}
            <div className="group bg-background border border-foreground/15 hover:border-foreground rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-foreground/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={resources.portal_image.url} 
                    alt={resources.portal_image.alt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase mb-4 tracking-wide">
                  {resources.portal_title}
                </h3>
                <p className="font-body text-base text-foreground/80 leading-relaxed mb-6 font-light">
                  {resources.portal_desc}
                </p>
              </div>
              <a 
                href="#apply" 
                className="inline-flex items-center justify-center font-heading text-xs font-bold uppercase tracking-widest text-center px-6 py-3 rounded-full border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground transition-colors mt-4 self-start"
              >
                Go to Portal
              </a>
            </div>

            {/* Card 2: Resources Hub */}
            <div className="group bg-background border border-foreground/15 hover:border-foreground rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-foreground/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={resources.hub_image.url} 
                    alt={resources.hub_image.alt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase mb-4 tracking-wide">
                  {resources.hub_title}
                </h3>
                <p className="font-body text-base text-foreground/80 leading-relaxed mb-6 font-light">
                  {resources.hub_desc}
                </p>
              </div>
              <a 
                href="#apply" 
                className="inline-flex items-center justify-center font-heading text-xs font-bold uppercase tracking-widest text-center px-6 py-3 rounded-full border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-colors mt-4 self-start"
              >
                Access Hub
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Application / Get In Touch Form Section */}
      <SectionWrapper id="apply" className="bg-background text-foreground py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Info Text & Image Column */}
            <div className="lg:col-span-5 reveal-item lg:sticky lg:top-32">
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-wide mb-6">
                {contact.heading}
              </h2>
              <p className="font-body text-lg text-foreground/85 leading-relaxed font-light mb-8">
                {contact.description}
              </p>
              
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-foreground/10 aspect-video w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={contact.image.url} 
                  alt={contact.image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 reveal-item">
              <div className="bg-background border border-foreground/15 p-8 md:p-12 rounded-3xl shadow-xl shadow-foreground/5">
                <h3 className="font-heading text-2xl font-bold uppercase mb-8 tracking-wide">
                  Job Application Form
                </h3>
                
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        className="w-full h-12 px-4 rounded-xl bg-background border border-foreground/20 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground transition-all font-body"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        className="w-full h-12 px-4 rounded-xl bg-background border border-foreground/20 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground transition-all font-body"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="position" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                        Position Applied For *
                      </label>
                      <select
                        id="position"
                        required
                        className="w-full h-12 px-4 rounded-xl bg-background border border-foreground/20 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground transition-all font-body"
                      >
                        <option value="">Select a position...</option>
                        <option value="data-analyst">AI & Data Analyst</option>
                        <option value="embedded-engineer">Embedded Systems Engineer</option>
                        <option value="software-engineer">Full-Stack Web Developer</option>
                        <option value="cybersecurity">Cybersecurity Analyst</option>
                        <option value="other">Other / General Application</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="portfolio" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                        Resume / Portfolio Link
                      </label>
                      <input
                        type="url"
                        id="portfolio"
                        placeholder="https://linkedin.com/in/... or github.com/..."
                        className="w-full h-12 px-4 rounded-xl bg-background border border-foreground/20 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground transition-all font-body"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">
                      Cover Letter / Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about yourself and why you'd like to join UVA..."
                      className="w-full p-4 rounded-xl bg-background border border-foreground/20 text-foreground focus:outline-none focus:ring-2 focus:ring-foreground transition-all font-body resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto mt-4 px-10 py-4 bg-foreground text-background font-heading font-bold uppercase tracking-widest text-sm rounded-full hover:bg-muted hover:text-background transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </SectionWrapper>

    </main>
  );
}
