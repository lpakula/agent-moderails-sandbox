/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f1',
          100: '#f5e6d3',
          200: '#e8cba5',
          300: '#d4a574',
          400: '#c4864e',
          500: '#a0663a',
          600: '#8b5230',
          700: '#6f3f27',
          800: '#5a3322',
          900: '#4a2b1e',
          950: '#2d1810',
        },
      },
    },
  },
  plugins: [],
}

