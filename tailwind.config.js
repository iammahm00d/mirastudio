/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EC',
        ivory: '#F8F5EF',
        ink: '#111111',
        graphite: '#66625C',
        muted: '#8C867E',
        line: '#DDD6CC',
        accent: '#B9A88F',
        champagne: '#C8B99F'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-0.075em'
      }
    }
  },
  plugins: []
};
