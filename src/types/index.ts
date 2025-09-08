export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
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
  technologies: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
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