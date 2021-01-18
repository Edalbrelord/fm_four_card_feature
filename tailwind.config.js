const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          "gray": 'hsl(229, 6%, 66%)',
          "dark-grey": 'hsl(234, 12%, 34%)',
        },
        grey: {
          light: "hsl(0, 0%, 98%)",
        },
        primary: {
          blue: "hsl(212, 86%, 64%)",
          cyan: "hsl(180, 62%, 55%)",
          orange: "hsl(34, 97%, 64%)",
          red: "hsl(0, 78%, 62%)",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
