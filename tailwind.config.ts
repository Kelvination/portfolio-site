import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'gray-950': '#0a0a0a',
        'gray-925': '#0f0f0f',
        'gray-875': '#1a1a1a',
        'grayish-blue': {
          '900': '#0f1419',
          '800': '#1a202c',
          '700': '#2d3748',
        },
        'accent': {
          '100': '#b2d8d8',
          '300': '#66b2b2',
          '400': '#66b2b2',
          '500': '#008080',
          '600': '#006666',
          '700': '#004c4c',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'cloud-drift': 'cloudDrift 20s ease-in-out infinite alternate',
        'radial-drift': 'radialDrift 8s linear alternate infinite',
        'foreground-sweep': 'foregroundSweep 6s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        cloudDrift: {
          '0%': { 
            backgroundPosition: '0% 0%',
            transform: 'scale(1) rotate(0deg)'
          },
          '25%': { 
            backgroundPosition: '100% 25%',
            transform: 'scale(1.05) rotate(1deg)'
          },
          '50%': { 
            backgroundPosition: '50% 100%',
            transform: 'scale(1.02) rotate(-1deg)'
          },
          '75%': { 
            backgroundPosition: '25% 75%',
            transform: 'scale(1.03) rotate(0.5deg)'
          },
          '100%': { 
            backgroundPosition: '75% 50%',
            transform: 'scale(1) rotate(-0.5deg)'
          },
        },
        radialDrift: {
          '0%': { 
            backgroundPosition: '0% 0%'
          },
          '100%': { 
            backgroundPosition: '100% 100%'
          },
        },
        foregroundSweep: {
          '0%': { 
            transform: 'translateX(-100%)'
          },
          '100%': { 
            transform: 'translateX(100%)'
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config