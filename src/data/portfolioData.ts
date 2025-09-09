import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Kelvin Newton',
    title: 'Agentic Software Engineer',
    bio: 'Passionate software engineer with expertise in modern web technologies. I love building scalable applications and solving complex problems with clean, efficient code.',
    location: 'United States',
    email: 'kelvin.a.newton@gmail.com',
    github: 'https://github.com/Kelvination',
    linkedin: 'https://linkedin.com/in/kelvin-newton'
  },
  projects: [
    {
      id: '1',
      title: 'ChatFight!',
      description: 'A RNG-Based Battle Royale Game for Twitch Chat.',
      longDescription: 'ChatFight is my first official game that I released on Steam. It is a game for Twitch streamers, to help them interact with their chat. The idea comes from a game called Marbles On Stream, in which viewers in chat get to put their name on a marble and hope that their marble reaches the finish line first. The game is a Battle Royale, but for stream viewers. The viewers can customize their characters using the website https://www.chatfight.win by linking their Twitch account and equipping items. There is also a store on the website where viewers can buy different items for their characters, as well as equipping gloves and boots.I also plan to add more features to interact with the world and the players and increase the excitement and make it funnier to watch.',
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
      name: 'TypeScript',
      category: 'frontend',
      level: 'expert'
    },
    {
      id: '3',
      name: 'Node.js',
      category: 'backend',
      level: 'advanced'
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
    }
  ]
};
