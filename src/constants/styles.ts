export const colors = {
  accent: {
    400: '#64ffda',
    500: '#4fd1c7',
    600: '#38b2ac'
  },
  gray: {
    100: '#f7fafc',
    200: '#edf2f7',
    300: '#e2e8f0',
    400: '#cbd5e0',
    500: '#a0aec0',
    600: '#718096',
    700: '#4a5568',
    800: '#2d3748',
    900: '#1a202c',
    950: '#0d1117'
  }
} as const;

export const spacing = {
  section: 'py-20 px-6',
  sectionMobile: 'py-16 md:py-20 px-4 md:px-6',
  container: 'max-w-6xl mx-auto',
  containerLarge: 'max-w-7xl mx-auto',
  containerSmall: 'max-w-5xl mx-auto'
} as const;

export const typography = {
  sectionTitle: 'text-5xl md:text-6xl font-bold mb-6',
  sectionSubtitle: 'text-xl text-gray-300 max-w-3xl mx-auto',
  cardTitle: 'text-2xl font-semibold text-white',
  cardText: 'text-gray-300 leading-relaxed'
} as const;

export const animations = {
  hover: 'hover:scale-1.05 hover:y--2',
  tap: 'active:scale-0.95',
  transition: 'transition-all duration-300'
} as const;

export const borders = {
  card: 'border border-gray-600/30 hover:border-gray-500/50',
  input: 'border border-gray-600/30 focus:border-accent-500',
  divider: 'border-gray-600/20'
} as const;