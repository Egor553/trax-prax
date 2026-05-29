export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fff0f8',
          100: '#ffe4ec',
          200: '#ffc9df',
          300: '#ff8bb8',
          400: '#e84b95',
          500: '#c42679',
          600: '#aa1e69',
        },
        cream: '#fff6f8',
        rose: '#ffe0ee',
        ink: '#2a0a18',
      },
      boxShadow: {
        soft: '0 18px 38px rgba(60,15,40,0.12)',
      },
      borderRadius: {
        xl: '28px',
      },
      fontFamily: {
        display: ['Instrument Serif', 'Georgia', 'serif'],
        body: ['Onest', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
