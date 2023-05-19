const { fontFamily } = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    screens: {
      'xs': '414px',
      'sm': '576px',
      'md': '768px',
      'lg': '991px', 
      'xl': '1200px', 
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        /* Theme Setup - Your font here: 
        primary: ['var(--libre-baskerville-font)', ...fontFamily.serif],
        sans: ['var(--bebas-neue-font)', ...fontFamily.sans],
        */ 
      },
      colors: {
        'black': '#000000', 
        'white': '#FFFFFF',
      },
    },
  },
}
