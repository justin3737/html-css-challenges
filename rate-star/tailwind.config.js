const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': {'max': '390px'},
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}