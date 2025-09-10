import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Kelvin Newton',
    title: 'Software Engineer',
    bio: 'Full-stack software engineer with 7+ years building applications that serve millions of users. Passionate about leveraging the latest and most effective tools to create meaningful technology that solves real problems for real people.',
    location: 'Georgetown, KY',
    email: 'kelvin.a.newton@gmail.com',
    github: 'https://github.com/Kelvination',
    linkedin: 'https://linkedin.com/in/kelvin-newton'
  },
  projects: [
    {
      id: '1',
      title: 'ChatFight!',
      description: 'A Battle Royale Game for Twitch Chat.',
      longDescription: 'ChatFight is my first official game that I released on Steam. It is a game for Twitch streamers, to help them interact with their chat. The idea comes from a game called Marbles On Stream, in which viewers in chat get to put their name on a marble and hope that their marble reaches the finish line first. \n\nThe game is a Battle Royale, but for stream viewers. The viewers can customize their characters using the website by linking their Twitch account and equipping items. \n\nThere is also a store on the website where viewers can buy different items for their characters, as well as equipping gloves and boots. This game is still running and people are playing it daily, with over 200k total players since its launch.',
      technologies: [
        'Vue.js',
        'Node.js',
        'TypeScript',
        'Unity3D',
        'C#',
        'MongoDB',
        'Express.js',
        'SOLID'
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
      description: 'A Value-Study Tool for Artists',
      longDescription: 'I created this tool to help with one of the most challenging aspects of learning to draw and paint: understanding value relationships. When working from reference photos, it can be difficult to identify the distinct light and dark patterns that give subjects their form and depth, especially when colors and fine details are distracting. This tool uses a GLSL shader to separate images into customizable value levels so you can clearly see the underlying structure of light and shadow. \n\nIt allows you to adjust the thresholds between levels and assign colors to different values to experiment with color schemes before starting a painting. It\'s essentially a training tool that helps develop the ability to see and simplify complex lighting into the clear value patterns that make artwork feel three-dimensional and visually compelling.',
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
    },
    {
      id: '4',
      title: 'Muggy Lake',
      description: 'Ludum Dare 48: Darker and Darker',
      longDescription: 'This was one of my favorite projects that I have gotten to work on. I got to work on this project with two great friends, both of whom did an incredible job on their respective parts. I worked on the overall mood and gameplay mechanics, John did the level design and created the [SPOILER] which is way too good at what it is supposed to do, and Tyler did an absolutely amazing job with the music and sound design. If you have some extra time, just sit and enjoy the main menu music. And the sounds in-game are the perfect level of spooky to fit the mood.\n\nIf I were to work on this game again, I would definitely focus more on optimizing it. There were way too many trees on the level which cut down heavily on the performance, but it was a rushed game jam game so I was more focused on other aspects of the game. Overall, it was an amazing weekend and I hope you will enjoy the game!\n\nP.S. The game only takes about 5-10 minutes to complete. And if you want to speed run it, try the Konami Code. But I would try to beat it normally first to fully experience it.',
      technologies: [
        'Unity3D',
        'C#'
      ],
      githubUrl: 'https://github.com/kelvination/MuggyLake',
      liveUrl: '',
      featured: false,
      websiteUrl: 'https://ldjam.com/events/ludum-dare/48/muggy-lake'
    }
  ],
  experience: [
    {
      id: '1',
      title: 'Software Engineer II',
      company: 'Hudl',
      location: 'Remote / Lexington, KY',
      startDate: 'Oct 2022',
      description: 'Led development of the Hudl Fan mobile app from the ground up, as well as making significant contributions to microservice backends to support millions of users.',
      detailedDescription: 'I co-architected and built the Hudl Fan Mobile App from scratch using React Native - it now has over 1.6 million downloads on iOS and serves thousands of daily users. The biggest challenge wasn\'t the technical implementation, but navigating constantly changing stakeholder requirements and design pivots while keeping development moving forward. \n\nOn the backend side, I designed and built the entire push notification system that handles 20-40K monthly notifications. The interesting part was architecting a fan-out system similar to Twitter\'s approach - if a team with a million subscribers goes live, we needed to have the ability to deliver all those notifications within a minute so fans don\'t miss the action. That\'s where the pub/sub architecture really shines. \n\nI also became the team\'s go-to person for AI development tools. I\'ve been proactively staying ahead of the curve, testing everything from Devin.AI to OpenHands, Gemini CLI, Jules, Cursor, Claude Code etc., and then training my teammates on what actually works versus what\'s just hype. I relentlessly pushed for Hudl to set up Devin.AI\'s DeepWiki system to help us navigate our documentation more efficiently, which was one of the most impactful AI enhancements I\'ve seen. It has been really rewarding to help the team embrace these tools strategically rather than just jumping on every new trend.',
      logoUrl: '/hudl-fan-logo.png',
      technologies: [
        'React Native',
        'React',
        'Typescript',
        'Node.js',
        'DocDB',
        'Docker',
        'RabbitMQ',
        'SOLID',
        'C#',
        '.NET',
        'AWS',
        'Microservices'
      ],
      endDate: 'Sep 2025'
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      company: 'eLink Design',
      location: 'Lexington, KY',
      startDate: 'Dec 2018',
      endDate: 'Oct 2022',
      description: 'Developed and maintained full stack applications for multi-million dollar e-commerce websites and mobile applications, working directly with stakeholders to ensure high-quality delivery',
      detailedDescription: 'I was the primary developer responsible for metalsdepot.com, which brings in millions of dollars annually. It\'s by no means a visually pleasing site (I had very little control over the design, I swear!), but it is incredibly effective at what it needs to do. It wasn\'t the cleanest codebase when I inherited it - think 10+ years of legacy PHP that had been built and rebuilt by different developers over time. But I spent most of my time enhancing the core business logic that actually mattered: the shipping calculator algorithms, checkout flow optimization, and internal tools for package size calculations. When you\'re dealing with metal products that can weigh hundreds of pounds and have complex shipping requirements, getting those calculations right is crucial for both customer experience and profit margins. \n\nI worked directly with the CEO on feature requests and improvements, which taught me a lot about translating business needs into technical solutions. The challenge was always figuring out how to add modern functionality to a legacy system without breaking everything that was already working. \n\nI also built several other web applications and mobile apps using Vue.js, Xamarin, or whichever technology was requested for the project. It was great experience in both maintaining existing systems and building new ones from scratch.',
      logoUrl: '/elink-logo.jpg',
      technologies: [
        'jQuery',
        'Doctrine',
        'Linux',
        'Apache',
        'MySQL',
        'PHP',
      ]
    }
  ],
  skills: [
    {
      id: '1',
      name: 'React / React Native',
      category: 'frontend',
      level: 4
    },
    {
      id: '2',
      name: 'Javascript / TypeScript',
      category: 'frontend',
      level: 4
    },
    {
      id: '3',
      name: 'Express.js',
      category: 'backend',
      level: 4
    },
    {
      id: '4',
      name: 'PostgreSQL',
      category: 'database',
      level: 2
    },
    {
      id: '1757423207663',
      name: 'Node.js',
      category: 'backend',
      level: 3
    },
    {
      id: '1757423221182',
      name: 'Vue',
      category: 'frontend',
      level: 3
    },
    {
      id: '1757423251483',
      name: 'SQL',
      category: 'database',
      level: 3
    },
    {
      id: '1757423270981',
      name: 'MongoDB / DocDB',
      category: 'database',
      level: 4
    },
    {
      id: '1757423281998',
      name: 'VSCode',
      category: 'tools',
      level: 4
    },
    {
      id: '1757423289402',
      name: 'VIM',
      category: 'tools',
      level: 3
    },
    {
      id: '1757423289663',
      name: 'Claude Code',
      category: 'tools',
      level: 4
    },
    {
      id: '1757423289890',
      name: 'Prompt Engineering',
      category: 'other',
      level: 3
    },
    {
      id: '1757423361169',
      name: 'Context Engineering',
      category: 'other',
      level: 3
    },
    {
      id: '1757438592255',
      name: 'Apache',
      category: 'backend',
      level: 2
    },
    {
      id: '1757438592581',
      name: 'AWS Cloud Infrastructure',
      category: 'backend',
      level: 2
    },
    {
      id: '1757438592862',
      name: 'Microservice Architecture',
      category: 'backend',
      level: 3
    },
    {
      id: '1757438649379',
      name: 'MySQL',
      category: 'database',
      level: 3
    },
    {
      id: '1757438851606',
      name: 'HTML / CSS',
      category: 'frontend',
      level: 4
    },
    {
      id: '1757457565731',
      name: 'Cursor / Github Copilot',
      category: 'tools',
      level: 3
    },
    {
      id: '1757457783577',
      name: 'PHP / C#',
      category: 'backend',
      level: 3
    },
    {
      id: '1757458652322',
      name: 'Swift / Kotlin',
      category: 'frontend',
      level: 1
    }
  ]
};
