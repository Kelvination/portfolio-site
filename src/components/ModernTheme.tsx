import React from "react";
import type { PortfolioData } from "../types";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import ExperienceSection from "./sections/Experience";
import Contact from "./sections/Contact";
import PerformancePanel from "./ui/PerformancePanel";
import { backgroundGradients } from "../constants/gradients";
import { usePerformance } from "../contexts/PerformanceContext";

interface ModernThemeProps {
  data: PortfolioData;
}

const ModernTheme: React.FC<ModernThemeProps> = ({ data }) => {
  const { personalInfo, projects, experience, skills } = data;
  const { settings } = usePerformance();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Animation Layers - Only Cloud Drift and Pulse Glow */}

      {/* Layer 1: Slow cloud drift overlay */}
      {settings.backgroundAnimations && settings.cloudDrift && (
        <div
          className="animate-cloud-drift absolute inset-0"
          style={{
            background: backgroundGradients.cloudDrift,
            backgroundSize: "250%",
          }}
        />
      )}

      {/* Layer 2: Pulsing center glow */}
      {settings.backgroundAnimations && settings.pulseGlow && (
        <div
          className="animate-pulse-glow absolute inset-0"
          style={{
            background: backgroundGradients.pulseLayer,
            backgroundSize: "150%",
          }}
        />
      )}

      {/* Static background when animations are disabled */}
      {!settings.backgroundAnimations && (
        <div
          className="absolute inset-0"
          style={{
            background: backgroundGradients.cloudDrift,
            backgroundSize: "100%",
          }}
        />
      )}

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

      {/* Performance Panel */}
      <PerformancePanel />
    </div>
  );
};

export default ModernTheme;
