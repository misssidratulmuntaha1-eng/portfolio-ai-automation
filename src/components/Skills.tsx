import React from 'react';
import { SKILLS } from '../data/portfolioData';
import { Workflow, MessageSquareText, CalendarSync, MailCheck, Puzzle, Blocks } from 'lucide-react';

export const Skills: React.FC = () => {
  const getSkillIcon = (iconName: string, isGoldAccent: boolean) => {
    const iconClass = `w-6 h-6 stroke-[1.75] ${isGoldAccent ? 'text-[#C9A227]' : 'text-[#0B3D2E]'}`;
    switch (iconName) {
      case 'workflow-arrows':
        return <Workflow className={iconClass} />;
      case 'speech-bubbles':
        return <MessageSquareText className={iconClass} />;
      case 'calendar-node':
        return <CalendarSync className={iconClass} />;
      case 'envelope-signal':
        return <MailCheck className={iconClass} />;
      case 'puzzle-blocks':
        return <Blocks className={iconClass} />;
      default:
        return <Workflow className={iconClass} />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-[rgba(11,61,46,0.15)] bg-[#F4F0E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">
        {/* Section Headline on its own without eyebrow header */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A17] tracking-tight">
            Skills & Capabilities
          </h2>
        </div>

        {/* Short Grid: Icon, Title, and One Short Line on Cream Paper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SKILLS.map((skill, idx) => (
            <div
              key={skill.id}
              className="border border-[rgba(11,61,46,0.15)] bg-[#E8E1D0] p-6 space-y-3 hover:border-[#0B3D2E] transition-colors"
            >
              {/* Clean Icon with single gold accent on the first skill */}
              <div>{getSkillIcon(skill.iconName, idx === 0)}</div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-[#1A1A17] leading-snug">
                {skill.title}
              </h3>

              {/* One short line */}
              <p className="text-sm text-[#4A453C] font-sans leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

