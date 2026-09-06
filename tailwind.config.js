/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2F4E40',
          dark: '#233A2F',
          light: '#3E6350',
        },
        cream: '#F7F2E9',
        paper: '#FDFBF5',
        terrazzo: '#3B5C42',
        charcoal: '#1C1F1B',
        oak: {
          DEFAULT: '#A9713F',
          light: '#C99A63',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        checkerboard:
          'repeating-conic-gradient(#2F4E40 0% 25%, #F7F2E9 0% 50%)',
      },
    },
  },
  plugins: [],
}
