import React, { useState, useEffect } from 'react';
import { CORE_CAPABILITIES, PORTFOLIO_META } from '../data/portfolioData';
import { DeliveryLifecycleAnimation } from './DeliveryLifecycleAnimation';
import portraitImg from '../assets/images/sidra_original_photo_1789211515793.jpg';

export const AboutMe: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string>(portraitImg);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('sidra_original_photo');
    if (saved) {
      setPhotoSrc(saved);
      // Automatically persist to project files so Vercel and deployed builds include it permanently
      if (saved.startsWith('data:image')) {
        fetch('/api/save-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: saved }),
        })
          .then((res) => {
            if (res.ok) {
              setSaveStatus('saved');
            }
          })
          .catch(() => {});
      }
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setPhotoSrc(dataUrl);
        try {
          localStorage.setItem('sidra_original_photo', dataUrl);
        } catch {
          // Ignore quota error
        }

        fetch('/api/save-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: dataUrl }),
        })
          .then((res) => {
            if (res.ok) {
              setSaveStatus('Photo permanently saved to project files!');
              setTimeout(() => setSaveStatus(null), 4000);
            }
          })
          .catch(() => {});
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="about-me" className="py-16 sm:py-24 border-b border-[rgba(11,61,46,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-16">
        {/* Section Headline on its own without eyebrow header */}
        <div className="space-y-2">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A17] tracking-tight">
            About Me
          </h2>
          <div className="text-base sm:text-lg font-sans text-[#0B3D2E] font-medium">
            {PORTFOLIO_META.title} &mdash; {PORTFOLIO_META.niche}
          </div>
        </div>

        {/* Profile Section with Static Picture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Picture Column on Cream Paper - Centered on mobile, aligned on desktop */}
          <div className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start">
            <div className="bg-[#E8E1D0] border border-[rgba(11,61,46,0.15)] p-3 w-full max-w-[260px] sm:max-w-[280px] space-y-3 shadow-xs">
              <div className="relative overflow-hidden bg-[#DCD4C0] aspect-[3/4]">
                <img
                  src={photoSrc}
                  alt="Sidra tul Muntaha - AI Automation Specialist"
                  className="w-full h-full object-cover object-[center_top]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="pt-1 text-center md:text-left">
                <div className="font-display font-bold text-sm text-[#1A1A17]">
                  {PORTFOLIO_META.name}
                </div>
                <div className="mt-1.5 flex flex-col items-center md:items-start">
                  <label
                    htmlFor="portrait-file-input"
                    className="text-[11px] font-mono text-[#0B3D2E]/70 hover:text-[#0B3D2E] hover:underline cursor-pointer"
                  >
                    Change photo file
                  </label>
                  <input
                    id="portrait-file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {saveStatus && (
                    <span className="text-[11px] font-mono text-[#0B3D2E] font-medium mt-0.5">
                      {saveStatus === 'saved' ? '✓ Synced permanently' : saveStatus}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Description / Narrative Column */}
          <div className="md:col-span-8 lg:col-span-9 space-y-5 text-[#4A453C] font-sans text-base sm:text-lg leading-relaxed">
            <p>
              Most clinics and coaching practices don't lose patients because of bad service, they lose them to a missed call, a slow follow up, or a calendar that got double booked at the worst moment.
            </p>
            <p>
              Since July 2025, I've been building the systems that quietly close those gaps — booking flows, scheduling, and follow ups that work in the background so your front desk isn't drowning, and nobody falls through the cracks.
            </p>
          </div>
        </div>

        {/* Core Capabilities on Cream Paper */}
        <div className="space-y-6 pt-4">
          <h3 className="font-display text-2xl font-bold text-[#1A1A17]">
            Core Clinical Systems
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CORE_CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.id}
                className="border border-[rgba(11,61,46,0.15)] bg-[#E8E1D0] p-6 flex flex-col justify-between space-y-4 hover:border-[#0B3D2E] transition-colors"
              >
                <div className="space-y-3">
                  <h4 className="font-display text-xl font-bold text-[#1A1A17]">
                    {cap.title}
                  </h4>

                  <p className="text-sm text-[#4A453C] font-sans leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div
                  className={`pt-4 border-t border-[rgba(11,61,46,0.15)] text-xs font-sans font-medium ${
                    idx === 0 ? 'text-[#C9A227] font-semibold' : 'text-[#0B3D2E]'
                  }`}
                >
                  {cap.keyMetric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Cycle Interactive Walkthrough */}
        <div className="border-t border-[rgba(11,61,46,0.15)] pt-10 space-y-4">
          <div className="text-center space-y-1">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1A1A17] tracking-tight">
              Delivery Cycle
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#6B6355]">
              From bottleneck audit to live clinic deployment.
            </p>
          </div>
          <DeliveryLifecycleAnimation />
        </div>
      </div>
    </section>
  );
};

