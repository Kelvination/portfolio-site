import React from 'react';
import type { PortfolioData } from '../types';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import ExperienceSection from './sections/Experience';
import Contact from './sections/Contact';

interface ModernThemeProps {
  data: PortfolioData;
}

const ModernTheme: React.FC<ModernThemeProps> = ({ data }) => {
  const { personalInfo, projects, experience, skills } = data;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main radial gradient background with corner animations */}
      <div 
        className="absolute inset-0 animate-radial-drift"
        style={{
          background: `
            radial-gradient(farthest-side at top left, #09090b, transparent),
            radial-gradient(farthest-side at top right, #004c4c20, transparent),
            radial-gradient(farthest-side at bottom left, #09090b, transparent),
            radial-gradient(farthest-side at bottom right, #00808010, transparent)
          `,
          backgroundSize: '300%',
        }}
      />
      
      {/* Animated foreground gradient sweep */}
      <div 
        className="absolute inset-0 opacity-20 animate-foreground-sweep"
        style={{
          width: '200%',
          background: 'linear-gradient(to right, transparent, #008080, #008080, #008080, transparent)',
        }}
      />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Content Sections */}
      <div className="relative z-10">
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <ExperienceSection experience={experience} />
        <Contact personalInfo={personalInfo} />
      </div>
    </div>
  );
};

export default ModernTheme;