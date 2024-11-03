/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1300px',
      },
      fontFamily: {
        'inter' : ['Inter', 'sans-serif'],
        'playfair' : ['"Playfair Display"', 'san-serif'],
        'playfairsc' : ['"PlayfairSC Display"', 'san-serif'],
        'jakarta' : ['"Plus Jakarta Sans"', 'san-serif'],
      },
      colors: {
        'brand': '#6D1600',
        'dark': '#282A3A',
        'grey': '#D9D9D9',
        'braight-grey': '#F6F6F6'
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

