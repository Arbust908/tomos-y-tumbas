const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        main: 'var(--main)',
        background: 'var(--background)',
        header: 'var(--header)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        title: ['Dwarven Axe', 'serif'],
        main: ['IMFell DWPica', 'sans-sefir'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
