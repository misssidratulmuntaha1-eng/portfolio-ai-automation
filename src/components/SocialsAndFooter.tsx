import React from 'react';
import { SOCIAL_LINKS, PORTFOLIO_META } from '../data/portfolioData';
import { ArrowUpRight, Mail, ArrowUp } from 'lucide-react';

export const SocialsAndFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const emailAddress = 'maliksidra.ms@gmail.com';

  return (
    <footer id="socials" className="bg-[#F4F0E6] pt-16 sm:pt-24 border-t border-[rgba(11,61,46,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Practice Inquiry Banner without consultant details panel */}
        <div className="max-w-3xl space-y-6 pb-16 border-b border-[rgba(11,61,46,0.15)]">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1A1A17] font-bold leading-tight">
            Ready to reclaim 17+ hours weekly and capture missed patient visits?
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#4A453C] leading-relaxed">
            I audit your clinic bottleneck, engineer the calendar logic, and deploy an autonomous booking and
            follow-up system without replacing your existing patient management software.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-sans">
            <a
              href={`mailto:${emailAddress}?subject=Practice Automation Inquiry&body=Hi Sidra,%0D%0A%0D%0AI would like to discuss setting up an AI automation system for our practice.%0D%0A%0D%0ABest regards,`}
              className="bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-[#F4F0E6] px-6 py-3.5 border border-[#0B3D2E] flex items-center gap-2 font-medium tracking-tight transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F4F0E6]" />
              <span>Get in Touch Directly</span>
            </a>
          </div>
        </div>

        {/* Socials Section: Instagram at the bottom */}
        <div className="space-y-6 pb-16 border-b border-[rgba(11,61,46,0.15)]">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1A1A17]">
            Social Channels
          </h3>

          <div className="border border-[rgba(11,61,46,0.15)] divide-y divide-[rgba(11,61,46,0.15)] bg-[#E8E1D0]">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 sm:p-6 flex items-center justify-between gap-3 hover:bg-[#DCD4C0] transition-colors group"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-xl sm:text-2xl font-bold text-[#1A1A17] group-hover:text-[#0B3D2E] transition-colors">
                    {item.platform}
                  </span>
                </div>

                <div className="flex items-center justify-end gap-4 text-sm font-sans text-[#4A453C]">
                  <span className="text-sm font-medium text-[#0B3D2E] flex items-center gap-1 group-hover:underline">
                    <span>Visit {item.platform}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C9A227]" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pb-12 pt-2 grid grid-cols-1 md:grid-cols-12 gap-6 text-xs font-sans text-[#6B6355]">
          <div className="md:col-span-6 space-y-1">
            <div className="text-[#1A1A17] font-bold font-display text-sm">
              SIDRA TUL MUNTAHA
            </div>
            <p>AI Automation Specialist for Dentists and Health Coaches.</p>
          </div>

          <div className="md:col-span-6 flex md:flex-col md:items-end justify-between gap-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 border border-[rgba(11,61,46,0.25)] hover:border-[#0B3D2E] bg-[#E8E1D0] text-[#1A1A17] hover:text-[#0B3D2E] px-4 py-2 text-xs font-sans transition-colors cursor-pointer"
              aria-label="Return to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
