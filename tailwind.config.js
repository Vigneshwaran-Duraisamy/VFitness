/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './public/**/*.html',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff2a2a',
          light: '#ff4a4a',
          dark: '#cc1f1f'
        },
        background: {
          DEFAULT: '#000000',
          soft: '#050505',
          muted: '#111111'
        },
        muted: {
          DEFAULT: '#9ca3af'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      boxShadow: {
        'soft-red': '0 10px 40px rgba(255, 42, 42, 0.35)'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 0.61, 0.36, 1)'
      }
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: [require('flowbite/plugin')]
};

