/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.blue[500],
          dark: colors.blue[700],
          light: colors.blue[300],
        },
        secondary: {
          DEFAULT: colors.purple[500],
          dark: colors.purple[700],
          light: colors.purple[300],
        },
      },
    },
  },
  plugins: [],
}
