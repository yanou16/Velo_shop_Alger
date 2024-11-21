/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
        },
        accent: {
          500: 'var(--accent-500)',
          600: 'var(--accent-600)',
          700: 'var(--accent-700)',
        },
        cta: {
          500: 'var(--cta-500)',
          600: 'var(--cta-600)',
          700: 'var(--cta-700)',
        },
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--primary-500), var(--primary-600))',
        'gradient-accent': 'linear-gradient(135deg, var(--accent-500), var(--accent-600))',
        'gradient-modern': 'linear-gradient(135deg, var(--primary-500), var(--accent-500))',
      },
    },
  },
  plugins: [],
}
