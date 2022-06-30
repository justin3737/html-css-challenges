module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.html',
      './src/**/*.js'
  ],
  content: [],
  theme: {
    screens: {
      'sm': {'min': '240px', 'max': '460px'},
      'sm-card': {'max': '375px'}
    },
    extend: {
      backgroundImage: {
        'jellyfish': "url('../img/background-jellyfish.jpeg')",
        'trangle': "url('../img/background-trangle.jpeg')",
        'smoke': "url('../img/background-smoke.jpeg')",
        'pink': "url('../img/background-pink.jpeg')",
        'chip': "url('../img/chip.png')",
        'visa': "url('../img/visa.png')",
        'amex': "url('../img/amex.png')",
        'jcb': "url('../img/jcb.png')",
        'mac': "url('../img/mastercard.png')",
        'unpay': "url('../img/unionpay.png')"
      }
    },
  },
  plugins: [],
}
