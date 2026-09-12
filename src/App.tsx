/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { SocialsAndFooter } from './components/SocialsAndFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F0E6] text-[#1A1A17] font-sans selection:bg-[#0B3D2E] selection:text-[#F4F0E6]">
      {/* Clean Navigation (only nav bar) */}
      <Navigation />

      <main>
        {/* Hero Section with Mind Map Delivery Lifecycle */}
        <Hero />

        {/* About Me Section with Photo and Core Capabilities */}
        <AboutMe />

        {/* Projects Grid Showcase */}
        <Projects />

        {/* Skills Section */}
        <Skills />
      </main>

      {/* Socials & Footer */}
      <SocialsAndFooter />
    </div>
  );
}
