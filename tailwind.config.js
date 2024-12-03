/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#FFFFFF',
        'custom-black': '#000400',
  
        'custom-gray-light': '#EFECE7',
        'custom-gray-medium': '#CCCCCC',
        'custom-gray': '#9B9893',
        'custom-gray-dark': '#707070',
        'custom-gray-darker': '#808080',
        'custom-blue': '#03438D',
        'custom-blue-light': '#E2EDFA',
  
        'custom-yellow': '#EEC32A',
        'custom-yellow-dark': '#FAA722',
  
        'custom-red': '#DE4B63',
        'custom-red-light': '#F57375',
  
        'custom-green': '#83C51D',
  
        'custom-black-transparent': '#00040029',
      },
      backgroundImage: {
        'custom-grid-bg-image': 'linear-gradient(#00040029 1px, transparent 0), linear-gradient(90deg, #00040029 1px, transparent 0)'
      },
      backgroundSize: {
        'custom-grid-bg-size': '100% 68px, 68px 100%'
      }
    },
  },
  plugins: [],
}

