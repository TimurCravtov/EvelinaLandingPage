/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        zain: ['Zain', 'sans-serif'],
      },
      animation: {
        'mascot-spin': 'mascot-spin 6s linear infinite',
      },
      keyframes: {
        'mascot-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  safelist: [
    'group-hover/mascot:pause',
    'group-focus/mascot:pause',
    'group-hover/mascot:rotate-0',
    'group-hover/mascot:scale-[1.02]',
    'group-focus/mascot:rotate-0',
    'group-focus/mascot:scale-[1.02]'
  ],
  plugins: [],
};
