export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  modalContent?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  websiteUrl?: string;
  steamUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  detailedDescription?: string;
  logoUrl?: string;
  technologies: string[];
}

import type { SkillLevelValue } from '../config/skillLevels';

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  level: SkillLevelValue;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  resumeUrl?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
}

export type Theme = 'minimal' | 'modern' | 'professional';