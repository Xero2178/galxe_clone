/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', "./build/js/*.js"],
  theme: {
    extend: {
      screens:{
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(max-aspect-ratio: 13/20)'},
      },
      keyframes:{
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'}
        },
        'open-minimenu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(0.8)'},
          '100%': {transform: 'scaleY(1)'}
        },
        'wallet-options': {
          '0%': {opacity: '0'},
          '20%': {opacity: '0.2'},
          '40%': {opacity: '0.4'},
          '60%': {opacity: '0.6'},
          '80%': {opacity: '0.8'},
          '100%': {opacity: '1'}
        },
        'wallet-scale': {
          '0%': {transform: 'scale(0)'},
          '20%': {transform: 'scale(0.2)'},
          '40%': {transform: 'scale(0.4)'},
          '60%': {transform: 'scale(0.6)'},
          '80%': {transform: 'scale(0.8)'},
          '100%': {transform: 'scale(1)'}
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'open-minimenu': 'open-minimenu 0.2s ease-in-out forwards',
        'wallet-options': 'wallet-options 0.5s ease-in-out forwards',
        'wallet-scale': 'wallet-scale 0.3s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

