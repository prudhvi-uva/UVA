import { CONTENT } from '@/constants/content';
import { Navbar } from '@/components/layout/Navbar';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Mail, Quote } from 'lucide-react';

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const metadata = {
  title: "UVA Leadership | UVA Product and IT Services Limited",
  description: "Explore UVA leadership, their mission and vision, highlighting the values that drive its innovation.",
};

export default function LeadershipPage() {
  const { hero, mission, team } = CONTENT.leadership;

  return (
    <main className="min-h-screen bg-paper text-ink flex flex-col selection:bg-ink selection:text-paper">
      <Navbar />

      {/* Hero Video Section (Vision & Mission) */}
      <SectionWrapper className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden text-paper">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/videos/3209829/free-video-3209829.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          >
            <source src="https://videos.pexels.com/video-files/3209829/3209829-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-ink/65" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          {/* Title */}
          <div className="text-center mb-16 reveal-item">
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-wide leading-tight">
              {mission.headline}
            </h1>
            <div className="w-24 h-1 bg-[#28C3DB] mx-auto mt-6"></div>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-16">
            {/* Left Column: Empowering Change */}
            <div className="reveal-item">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-[#28C3DB] uppercase tracking-wider mb-4">
                Empowering Change
              </h2>
              <p className="font-body text-base md:text-lg text-paper/90 leading-relaxed font-light">
                {hero.description}
              </p>
            </div>

            {/* Right Column: Inspiring Collective Action */}
            <div className="reveal-item">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-[#28C3DB] uppercase tracking-wider mb-4">
                Inspiring Collective Action
              </h2>
              <p className="font-body text-base md:text-lg text-paper/90 leading-relaxed font-light">
                {mission.description}
              </p>
            </div>
          </div>

          {/* Quote Block (Glassmorphic) */}
          <div className="reveal-item max-w-4xl mx-auto bg-paper/5 backdrop-blur-md border border-paper/10 p-8 rounded-3xl relative text-center">
            <Quote className="absolute top-4 left-4 w-10 h-10 text-paper/10" />
            <p className="font-body text-lg md:text-xl italic font-light leading-relaxed text-paper/90">
              {mission.quote}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <section className="bg-paper text-ink py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group flex flex-col bg-paper border border-ink/20 rounded-3xl overflow-hidden hover:border-ink transition-all duration-300 reveal-item hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-10 flex flex-col flex-grow items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-ink/10 mb-6 flex items-center justify-center">
                    <span className="font-heading text-3xl font-bold uppercase text-ink">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mb-2">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm font-bold tracking-widest uppercase text-mist mb-6">
                    {member.role}
                  </p>
                  
                  <div className="flex-grow flex items-center justify-center mb-8">
                    <p className="font-body text-lg italic text-ink/80">
                      {member.quote}
                    </p>
                  </div>
                  
                  <div className="flex gap-4 mt-auto pt-6 border-t border-ink/10 w-full justify-center">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.email} 
                      className="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
