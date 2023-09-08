/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1024px',
        '2xl': '1024px',
      },
      padding: '1rem',
    },
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'blue-dark': '#1E6F9F',
      'purple-dark': '#5E60CE',
      'danger': '#E25858'
    },
    fontSize: {
      base: ['1rem', '1.25rem']
    },
    extend: {
      colors: {
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        blue: '#4EA8DE',
        purple: '#8284FA',
        white: '#FFFFFF'
      },
    },
  },
  plugins: [],
}

