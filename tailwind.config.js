/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#696cff',
        secondary: '#8592a3',
        success: '#71dd37',
        danger: '#ff3e1d',
        warning: '#ffab00',
        info: '#03c3ec',
        light: '#fcfdfd',
        dark: '#233446',
      },
      fontFamily:{
        inter:['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

