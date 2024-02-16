
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/Views/**/*.ejs"],
  theme: {
    extend: {

      fontFamily:{
        "monte":["'Montserrat'", 'sans-serif'],
      },

      colors:{
       "light":"#fcf8ea",
       "light-color":"#f9efc8",
       "medium-light-color":"#f3de95",
       "medium-dark-color":"#ecc558",
       "dark":"#e5ab2a",
       "dark-color":"#d5941d",
       "dark-light-color":"#b87316",
       "dark-dark":"#985516",
       "color-dark":"#7a4219",
       "color-light-dark":"#68371b",
       "color-dark-dark":"#3c1c0c",
       /**degrade */

      },
      backgroundImage:{
        "img": "url('resources/img/library.jpg')",
        "open-menu": "url('resources/img/icon-hamburger.svg')",
        "close-menu": "url('resources/img/icon-close.svg')"
      },

    },
  },
  plugins: [],
}

