/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 30px 80px rgba(0, 0, 0, 0.45)'
      }
    }
  },
  plugins: []
};
