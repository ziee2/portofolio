import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f7f7f4',
        surface: '#ffffff',
        ink: '#111827',
        muted: '#5b6472',
        accent: '#06b6d4',
        accentSoft: '#67e8f9',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(17, 24, 39, 0.08)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top, rgba(6,182,212,0.16), transparent 28%), linear-gradient(135deg, rgba(255,255,255,0.96), rgba(247,247,244,0.96))',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;