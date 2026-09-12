import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_META } from '../data/portfolioData';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Me', href: '#about-me' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Socials', href: '#socials' },
  ];

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'bg-[#F4F0E6]/95 backdrop-blur-md shadow-xs' : 'bg-[#F4F0E6]'
      }`}
    >
      {/* Clean Header with ONLY Nav Bar */}
      <div className="border-b border-[rgba(11,61,46,0.15)] px-4 sm:px-8 py-4 flex items-center justify-between">
        <a
          href="#"
          className="group flex flex-col focus:outline-none"
          aria-label="Sidra tul Muntaha portfolio home"
        >
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A17] group-hover:text-[#0B3D2E] transition-colors">
            {PORTFOLIO_META.name}
          </span>
          <span className="text-[12px] tracking-wide text-[#6B6355] uppercase font-sans">
            {PORTFOLIO_META.title}
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main menu">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-sans font-medium text-[#4A453C] hover:text-[#0B3D2E] hover:underline underline-offset-4 decoration-[#0B3D2E]/30 transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center">
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A1A17] border border-[rgba(11,61,46,0.15)] hover:border-[#0B3D2E] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[rgba(11,61,46,0.15)] bg-[#F4F0E6] px-6 py-5 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 border-b border-[rgba(11,61,46,0.1)] text-base font-display font-semibold text-[#1A1A17] hover:text-[#0B3D2E]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
