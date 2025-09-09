export const gradients = {
  purple: 'from-gray-800/30 to-gray-700/30',
  blue: 'from-gray-800/25 to-gray-750/25',
  pink: 'from-gray-875/35 to-gray-800/35',
  cyan: 'from-gray-700/25 to-gray-800/25'
} as const;

export const buttonGradients = {
  primary: 'from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700',
  secondary: 'from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500',
  outline: 'from-gray-600 to-gray-700'
} as const;

export const backgroundGradients = {
  radialMain: `
    radial-gradient(farthest-side at top left, #09090b, transparent),
    radial-gradient(farthest-side at top right, #004c4c20, transparent),
    radial-gradient(farthest-side at bottom left, #00808050, transparent),
    radial-gradient(farthest-side at bottom right, #00808010, transparent)
  `,
  foregroundSweep: 'linear-gradient(to right, transparent, #00808010, #00808050, #00808008, transparent)',
  orbitalLayer: `
    radial-gradient(circle at 20% 80%, #00808015, transparent 50%),
    radial-gradient(circle at 80% 20%, #004c4c15, transparent 50%),
    radial-gradient(circle at 40% 40%, #006b6b10, transparent 50%)
  `,
  pulseLayer: `
    radial-gradient(ellipse at center, #008080, transparent 70%),
    conic-gradient(from 180deg at 50% 50%, transparent, #004c4c20, transparent)
  `,
  shiftingLayer: `
    linear-gradient(45deg, transparent, #00666620, transparent),
    linear-gradient(-45deg, transparent, #008a8a10, transparent)
  `,
  cloudDrift: `
    radial-gradient(ellipse at top, #00808028, transparent 50%),
    radial-gradient(ellipse at bottom, #06696948, transparent 50%),
    linear-gradient(45deg, #00666608, transparent 40%, #008a8a05, transparent)
  `
} as const;

export const skillLevelGradients = {
  beginner: 'from-gray-500 to-gray-400',
  intermediate: 'from-gray-400 to-gray-300',
  advanced: 'from-gray-300 to-gray-200',
  expert: 'from-accent-400 to-accent-500'
} as const;