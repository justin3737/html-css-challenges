const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'ssm': {
        'max': '375px'
      }
    },
    extend: {
      colors: {
        'green': 'hsl(158, 36%, 37%)',
        'green-darker': 'hsl(158, 36%, 17%)'
      },
      backgroundImage: {
        'desktop': "url('../img/image-product-desktop.jpg')",
        'mobile': "url('../img/image-product-mobile.jpg')"
      }
    },
  },
  plugins: [],
}