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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 bg-[length:400%_400%]" />
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
      
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