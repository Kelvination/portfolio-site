import React from 'react';
import type { PortfolioData } from '../types';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import ExperienceSection from './sections/Experience';
import Contact from './sections/Contact';
import { backgroundGradients } from '../constants/gradients';

interface ModernThemeProps {
  data: PortfolioData;
}

const ModernTheme: React.FC<ModernThemeProps> = ({ data }) => {
  const { personalInfo, projects, experience, skills } = data;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Layer 1: Main radial gradient background */}
      <div 
        className="absolute inset-0 animate-radial-drift"
        style={{
          background: backgroundGradients.radialMain,
          backgroundSize: '300%',
        }}
      />
      
      {/* Layer 1.5: Slow cloud drift overlay */}
      <div 
        className="absolute inset-0 animate-cloud-drift"
        style={{
          background: backgroundGradients.cloudDrift,
          backgroundSize: '250%',
        }}
      />
      
      {/* Layer 2: Orbital motion gradients */}
      <div 
        className="absolute inset-0 animate-orbital-motion"
        style={{
          background: backgroundGradients.orbitalLayer,
          backgroundSize: '400%',
        }}
      />
      
      {/* Layer 3: Shifting diagonal gradients */}
      <div 
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: backgroundGradients.shiftingLayer,
          backgroundSize: '200%',
        }}
      />
      
      {/* Layer 4: Pulsing center glow */}
      <div 
        className="absolute inset-0 animate-pulse-glow"
        style={{
          background: backgroundGradients.pulseLayer,
          backgroundSize: '150%',
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