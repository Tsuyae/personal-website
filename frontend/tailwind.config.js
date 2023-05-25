/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '414px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px', 
      'xl': '1200px', 
      '2xl': '1536px',
    },
    colors : {
      'dark-gray' : '#1C1C1C',
      'white': '#FFFFFF',
      'black': '#000000'
    },
    extend: {
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1s ease-out .8s 1 normal both'
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
          '100%': { width: '11ch' },
        },
      },
    },
  },
  plugins: [],
}
