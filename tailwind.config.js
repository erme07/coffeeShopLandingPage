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
      },
      keyframes: {
        move: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(5px)' }
        }
      },
      animation: {
        'move-slow': 'move .5s infinite alternate',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1300px'
      },
    },
  },
  plugins: [],
}

