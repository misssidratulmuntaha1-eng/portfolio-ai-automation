import React, { useState, useEffect, useRef } from 'react';
import { Search, Wrench, CheckSquare, Rocket, RotateCw, ChevronLeft, ChevronRight } from 'lucide-react';

const STAGES = [
  {
    title: 'Discovery & audit',
    desc: "Mapping how patients or clients currently book, call, and follow up, and finding where they're falling through the cracks.",
    label: 'Discovery',
    icon: Search,
  },
  {
    title: 'Design & build',
    desc: 'Building the exact booking, scheduling, and follow-up flow the practice needs, tailored to how the team already works.',
    label: 'Build',
    icon: Wrench,
  },
  {
    title: 'Testing & integration',
    desc: 'Connecting to real calendars, forms, and messaging, then testing edge cases before anything goes live.',
    label: 'Testing',
    icon: CheckSquare,
  },
  {
    title: 'Launch & handoff',
    desc: 'Going live with the new system, and making sure the team knows exactly how it works day to day.',
    label: 'Launch',
    icon: Rocket,
  },
  {
    title: 'Support & optimization',
    desc: 'Monitoring performance after launch and refining the system as call volume, appointment types, or needs change.',
    label: 'Support',
    icon: RotateCw,
  },
];

export const DeliveryLifecycleAnimation: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [animatingIndex, setAnimatingIndex] = useState(0);
  const [fillProgress, setFillProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (index: number) => {
    const nextIdx = ((index % STAGES.length) + STAGES.length) % STAGES.length;
    setCurrent(nextIdx);
    setAnimatingIndex(nextIdx);
    setFillProgress(0);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Trigger progress animation when current changes
  useEffect(() => {
    setFillProgress(0);
    const rAF = requestAnimationFrame(() => {
      setFillProgress(100);
    });

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      goTo(current + 1);
    }, 4300);

    return () => {
      cancelAnimationFrame(rAF);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [current]);

  return (
    <div className="py-6 flex justify-center w-full">
      <div className="max-w-[480px] w-full bg-[#E8E1D0] border border-[rgba(11,61,46,0.15)] rounded-[20px] p-6 shadow-xs">
        {/* Progress Bar Segments */}
        <div className="flex gap-1.5 h-[3px] mb-4" id="igp-progress">
          {STAGES.map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-[#DCD4C0] rounded-[2px] overflow-hidden h-full"
            >
              <div
                className="h-full bg-[#0B3D2E] rounded-[2px]"
                style={{
                  width: i < current ? '100%' : i === current ? `${fillProgress}%` : '0%',
                  transition: i === current ? 'width 4.2s linear' : 'none',
                }}
              />
            </div>
          ))}
        </div>

        {/* 5 Stage Avatar Buttons */}
        <div className="flex justify-between items-center px-1 mb-5">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            const isActive = i === current;
            const isDone = i < current;

            return (
              <button
                key={stage.label}
                onClick={() => goTo(i)}
                className="cursor-pointer border-none bg-transparent p-0 flex flex-col items-center gap-1.5 focus:outline-none group"
                aria-label={`${stage.label} stage`}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 transition-colors duration-200 ${
                    isActive
                      ? 'border-[#0B3D2E] bg-[#0B3D2E]'
                      : isDone
                      ? 'border-[#0B3D2E]/40 bg-[#F4F0E6]'
                      : 'border-[rgba(11,61,46,0.15)] bg-[#F4F0E6] group-hover:border-[#0B3D2E]/40'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-200 ${
                      isActive
                        ? 'text-[#F4F0E6]'
                        : isDone
                        ? 'text-[#0B3D2E]'
                        : 'text-[#6B6355]'
                    }`}
                  />
                </div>
                <span
                  className={`text-[11px] sm:text-xs font-sans transition-colors ${
                    isActive ? 'font-semibold text-[#1A1A17]' : 'text-[#6B6355]'
                  }`}
                >
                  {stage.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Stage Content Card on Cream Base */}
        <div className="bg-[#F4F0E6] rounded-[16px] p-5 border border-[rgba(11,61,46,0.15)] min-h-[140px] flex flex-col justify-center">
          <div className="text-xs font-medium text-[#0B3D2E] mb-1.5 font-sans">
            Stage {current + 1} of {STAGES.length}
          </div>
          <div className="text-base font-semibold text-[#1A1A17] mb-1.5 font-display">
            {STAGES[current].title}
          </div>
          <div className="text-sm text-[#4A453C] leading-[1.7] font-sans">
            {STAGES[current].desc}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-3.5 pt-1">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer text-[#0B3D2E] bg-[#F4F0E6] border border-[rgba(11,61,46,0.15)] hover:bg-[#0B3D2E] hover:text-[#F4F0E6] transition-colors"
            aria-label="Previous stage"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer text-[#0B3D2E] bg-[#F4F0E6] border border-[rgba(11,61,46,0.15)] hover:bg-[#0B3D2E] hover:text-[#F4F0E6] transition-colors"
            aria-label="Next stage"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
