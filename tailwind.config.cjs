/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.blue[600],
          dark: colors.blue[700],
          light: colors.blue[500],
        },
        secondary: {
          DEFAULT: colors.purple[600],
          dark: colors.purple[700],
          light: colors.purple[500],
        },
      },
    },
  },
  plugins: [],
}
