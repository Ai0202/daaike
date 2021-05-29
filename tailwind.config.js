// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-background': "url('/images/hero_background.jpg')",
        avator: "url('/images/avator.jpg')",
      }),
    },
    colors: {
      primary: {
        main: '#3f51b5',
        variant: '#757de8',
        text: '#fff',
      },
      secondary: {
        main: '#ffeb3b',
        variant: '#ffff72',
        text: '#000',
      },
      neutral: '#fff',
      error: colors.red[500],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
