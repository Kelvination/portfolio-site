import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Kelvin Newton",
    title: "Software Engineer",
    bio: "Passionate software engineer with expertise in modern web technologies. I love building scalable applications and solving complex problems with clean, efficient code.",
    location: "United States",
    email: "kelvin@example.com",
    github: "https://github.com/kelvinnewton",
    linkedin: "https://linkedin.com/in/kelvinnewton"
  },
  projects: [
    {
      id: "1",
      title: "Project One",
      description: "A modern web application built with React and Node.js",
      longDescription: "This is a comprehensive web application that demonstrates modern development practices including responsive design, API integration, and user authentication.",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      githubUrl: "https://github.com/kelvinnewton/project-one",
      liveUrl: "https://project-one.demo.com",
      featured: true
    },
    {
      id: "2",
      title: "Project Two",
      description: "Mobile-first e-commerce platform",
      longDescription: "A full-featured e-commerce solution with payment processing, inventory management, and real-time analytics.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/kelvinnewton/project-two",
      featured: true
    },
    {
      id: "3",
      title: "Project Three",
      description: "Real-time chat application",
      technologies: ["Socket.io", "Express", "React", "Redis"],
      githubUrl: "https://github.com/kelvinnewton/project-three",
      featured: false
    }
  ],
  experience: [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "Tech Company",
      location: "Remote",
      startDate: "2022-01",
      description: "Led development of key features and mentored junior developers",
      technologies: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      id: "2",
      title: "Software Engineer",
      company: "Previous Company",
      location: "San Francisco, CA",
      startDate: "2020-06",
      endDate: "2021-12",
      description: "Developed and maintained web applications using modern JavaScript frameworks",
      technologies: ["Vue.js", "Python", "PostgreSQL", "GCP"]
    }
  ],
  skills: [
    {
      id: "1",
      name: "React",
      category: "frontend",
      level: "expert"
    },
    {
      id: "2",
      name: "TypeScript",
      category: "frontend",
      level: "advanced"
    },
    {
      id: "3",
      name: "Node.js",
      category: "backend",
      level: "advanced"
    },
    {
      id: "4",
      name: "PostgreSQL",
      category: "database",
      level: "intermediate"
    },
    {
      id: "5",
      name: "AWS",
      category: "tools",
      level: "intermediate"
    }
  ]
};