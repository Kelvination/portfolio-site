import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Kelvin Newton',
    title: 'Agentic Software Engineer',
    bio: 'Experienced software engineer specializing in agentic development. I don\'t vibe code — I use agentic tools to enhance my productivity to create products people love.',
    location: 'Georgetown, KY',
    email: 'kelvin.a.newton@gmail.com',
    github: 'https://github.com/Kelvination',
    linkedin: 'https://linkedin.com/in/kelvin-newton'
  },
  projects: [
    {
      id: '1',
      title: 'ChatFight!',
      description: 'A RNG-Based Battle Royale Game for Twitch Chat.',
      longDescription: 'ChatFight is my first official game that I released on Steam. It is a game for Twitch streamers, to help them interact with their chat. The idea comes from a game called Marbles On Stream, in which viewers in chat get to put their name on a marble and hope that their marble reaches the finish line first. \n\nThe game is a Battle Royale, but for stream viewers. The viewers can customize their characters using the website by linking their Twitch account and equipping items. \n\nThere is also a store on the website where viewers can buy different items for their characters, as well as equipping gloves and boots. This game is still running and people are playing it daily, with over 200k total players since its launch.',
      technologies: [
        'Vue.js',
        'Node.js',
        'TypeScript',
        'Unity3D',
        'C#',
        'MongoDB',
        'Express.js',
        'SOLID Principles'
      ],
      githubUrl: '',
      liveUrl: '',
      websiteUrl: 'https://www.chatfight.win',
      steamUrl: 'https://store.steampowered.com/app/2095570/ChatFight/',
      featured: true
    },
    {
      id: '2',
      title: 'Valueator',
      description: 'Mobile-first e-commerce platform',
      longDescription: 'A full-featured e-commerce solution with payment processing, inventory management, and real-time analytics.',
      technologies: [
        'Next.js',
        'Stripe',
        'MongoDB',
        'Tailwind CSS'
      ],
      githubUrl: 'https://github.com/kelvination/valueator',
      featured: true,
      liveUrl: 'https://kelvination.github.io/Valueator'
    },
    {
      id: '3',
      title: 'Lighting Helper',
      description: 'A 3D Lighting Tool for Artists',
      technologies: [
        'React',
        'Three.js',
        'Typescript'
      ],
      githubUrl: 'https://github.com/kelvination/lighting-helper',
      featured: true,
      liveUrl: 'https://kelvination.github.io/lighting-helper'
    }
  ],
  experience: [
    {
      id: '1',
      title: 'Software Engineer II',
      company: 'Hudl',
      location: 'Remote / Lexington, KY',
      startDate: '2022-10',
      description: 'Led development of the Hudl Fan mobile app from the ground up, as well as making significant contributions to microservice backends to support millions of users.',
      detailedDescription: 'Add detailed description here about your specific accomplishments, projects worked on, impact made, and technical challenges overcome at Hudl.',
      logoUrl: '/placeholder-logo.png',
      technologies: [
        'React Native',
        '.NET',
        'AWS',
        'Microservices'
      ],
      endDate: '2025-09'
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      company: 'eLink Design',
      location: 'Lexington, KY',
      startDate: '2018-12',
      endDate: '2022-10',
      description: 'Developed and maintained full stack applications for multi-million dollar e-commerce websites and mobile applications, working directly with stakeholders to ensure high-quality delivery',
      detailedDescription: 'Add detailed description here about your specific projects, clients worked with, technical solutions implemented, and growth during your time at eLink Design.',
      logoUrl: '/placeholder-logo.png',
      technologies: [
        'Vue.js',
        'LAMP',
        'JQuery'
      ]
    }
  ],
  skills: [
    {
      id: '1',
      name: 'React / React Native',
      category: 'frontend',
      level: 'expert'
    },
    {
      id: '2',
      name: 'Javascript / TypeScript',
      category: 'frontend',
      level: 'expert'
    },
    {
      id: '3',
      name: 'Express.js',
      category: 'backend',
      level: 'expert'
    },
    {
      id: '4',
      name: 'PostgreSQL',
      category: 'database',
      level: 'intermediate'
    },
    {
      id: '5',
      name: 'AWS',
      category: 'tools',
      level: 'intermediate'
    },
    {
      id: '1757423207663',
      name: 'Node.js',
      category: 'backend',
      level: 'advanced'
    },
    {
      id: '1757423221182',
      name: 'Vue',
      category: 'frontend',
      level: 'advanced'
    },
    {
      id: '1757423251483',
      name: 'SQL',
      category: 'database',
      level: 'advanced'
    },
    {
      id: '1757423270981',
      name: 'MongoDB / DocDB',
      category: 'database',
      level: 'expert'
    },
    {
      id: '1757423281998',
      name: 'Claude Code',
      category: 'tools',
      level: 'expert'
    },
    {
      id: '1757423289402',
      name: 'Github Copilot',
      category: 'tools',
      level: 'expert'
    },
    {
      id: '1757423289663',
      name: 'Cursor',
      category: 'frontend',
      level: 'advanced'
    },
    {
      id: '1757423289890',
      name: 'Prompt Engineering',
      category: 'other',
      level: 'advanced'
    },
    {
      id: '1757423361169',
      name: 'Context Engineering',
      category: 'other',
      level: 'advanced'
    },
    {
      id: '1757438592255',
      name: 'Apache',
      category: 'backend',
      level: 'intermediate'
    },
    {
      id: '1757438592581',
      name: 'AWS Cloud Infrastructure',
      category: 'backend',
      level: 'advanced'
    },
    {
      id: '1757438592862',
      name: 'Microservice Architecture',
      category: 'backend',
      level: 'advanced'
    },
    {
      id: '1757438649379',
      name: 'MySQL',
      category: 'database',
      level: 'intermediate'
    }
  ]
};
