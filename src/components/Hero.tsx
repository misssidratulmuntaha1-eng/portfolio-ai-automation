import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-10 pb-16 sm:pb-24 border-b border-[rgba(11,61,46,0.15)]">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-8"
      >
        {/* Main Headline & Statement Layout */}
        <div className="pt-4 pb-4 sm:pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Oversized Expressive Headline in Editorial Serif */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[72px] leading-[1.12] tracking-[-0.015em] text-[#1A1A17] font-bold">
              Helping dentists and health coaches{' '}
              <span className="text-[#0B3D2E] underline decoration-[#C9A227] decoration-4 underline-offset-8">
                save 17+ hrs/week
              </span>{' '}
              and gain 9+ more appointments.
            </h1>

            {/* Supporting Copy in IBM Plex Sans */}
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-[#4A453C] leading-relaxed max-w-2xl pt-2 font-normal">
              Building AI automations for dentists and health coaches since July 2025 &mdash; appointment booking,
              scheduling, and patient follow-up systems for clinics.
            </p>

            {/* Actions: View projects & contact */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-sm font-sans">
              <a
                href="#projects"
                className="bg-[#0B3D2E] text-[#F4F0E6] hover:bg-[#0B3D2E]/90 transition-colors px-6 py-3 border border-[#0B3D2E] flex items-center gap-2 font-medium tracking-tight"
              >
                <span>View Clinical Case Studies</span>
                <ArrowDownRight className="w-4 h-4 text-[#F4F0E6]" />
              </a>

              <a
                href="#socials"
                className="border border-[rgba(11,61,46,0.25)] bg-transparent hover:border-[#0B3D2E] text-[#1A1A17] hover:text-[#0B3D2E] px-5 py-3 flex items-center gap-2 font-medium tracking-tight transition-all"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Simplified Practice Impact Metrics on Cream Paper */}
          <div className="lg:col-span-4 bg-[#E8E1D0] border border-[rgba(11,61,46,0.15)] p-6 sm:p-8 space-y-6 self-stretch flex flex-col justify-center">
            <div className="space-y-1">
              <div className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A17]">
                17.2 hrs
              </div>
              <div className="text-sm font-sans text-[#6B6355]">
                Weekly admin time reclaimed
              </div>
            </div>

            <div className="w-full h-px bg-[rgba(11,61,46,0.15)]"></div>

            <div className="space-y-1">
              <div className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A17]">
                +9.4
              </div>
              <div className="text-sm font-sans text-[#6B6355]">
                Extra booked appointments monthly
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

