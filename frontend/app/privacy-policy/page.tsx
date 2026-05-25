import { CONTENT } from '@/constants/content';
import { Navbar } from '@/components/layout/Navbar';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

export const metadata = {
  title: "UVA Tech Services Privacy Policy Overview | UVA Product and IT Services Limited",
  description: "UVA Product and IT Services Limited is dedicated to safeguarding your privacy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const { title, intro, sections } = CONTENT.privacyPolicy;

  return (
    <main className="min-h-screen bg-paper text-ink flex flex-col selection:bg-ink selection:text-paper">
      <Navbar />

      <SectionWrapper className="pt-32 pb-24 md:pt-40 md:pb-32 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="border-b border-ink/10 pb-8 mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-4">
              {title}
            </h1>
            <div className="w-20 h-1 bg-ink"></div>
          </div>

          {/* Intro Paragraphs */}
          <div className="space-y-6 mb-16">
            {intro.map((p, i) => (
              <p key={i} className="font-body text-lg md:text-xl text-ink/80 leading-relaxed font-light">
                {p}
              </p>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-16">
            {sections.map((section, idx) => (
              <div key={idx} className="border-t border-ink/5 pt-12 first:border-0 first:pt-0">
                <h2 className="font-heading text-2xl font-bold uppercase tracking-wide mb-6">
                  {section.heading}
                </h2>
                
                {/* Paragraphs in section */}
                {section.paragraphs && section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="font-body text-lg text-ink/80 leading-relaxed mb-6 font-light">
                    {p}
                  </p>
                ))}

                {/* Bullets in section */}
                {section.bullets && (
                  <ul className="list-disc pl-6 space-y-4 mb-6 text-ink/80 font-body text-lg font-light">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Footer in section */}
                {section.footer && (
                  <p className="font-body text-base text-ink/70 leading-relaxed bg-ink/5 p-6 rounded-2xl border border-ink/5 mt-6 font-light">
                    {section.footer}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </SectionWrapper>
    </main>
  );
}
