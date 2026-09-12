import React from 'react';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const projectSummaries: Record<string, string> = {
    orthoflow:
      'Autonomous conversational triage pipeline connected directly to Dentrix PMS. Categorizes patient pain levels, locks calendar slots instantly, and eliminates 18.5 hours of weekly front-desk phone tag.',
    pulseretention:
      'Asynchronous WhatsApp check-in companion for coaching practices. Automatically parses daily client notes and flags motivation drops, preserving program retention while saving 14 hours weekly.',
    dentarecall:
      'Low-friction hygiene recall protocol querying overdue patient records, delivering personalized booking links, and reactivating dormant charts without manual outbound receptionist calls.',
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-[rgba(11,61,46,0.15)] bg-[#F4F0E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">
        {/* Section Headline on its own without eyebrow header */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A17] tracking-tight">
            Projects
          </h2>
        </div>

        {/* Clean Grid with Collapsed Cards on Cream Paper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="border border-[rgba(11,61,46,0.15)] bg-[#E8E1D0] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#0B3D2E] transition-colors"
            >
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-sans text-[#6B6355]">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#1A1A17] mt-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#4A453C] font-sans leading-relaxed">
                  {projectSummaries[project.id] || project.systemSolution}
                </p>
              </div>

              {/* Single Highlighted Stat with exactly one gold accent moment */}
              <div className="pt-5 border-t border-[rgba(11,61,46,0.15)] flex items-baseline gap-2">
                <span
                  className={`font-display text-3xl font-bold ${
                    idx === 0 ? 'text-[#C9A227]' : 'text-[#1A1A17]'
                  }`}
                >
                  {project.hoursSavedWeekly} hrs
                </span>
                <span className="text-sm font-sans text-[#6B6355]">
                  saved weekly per clinic
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

