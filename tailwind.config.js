module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        slack: {
          100: '#f2d5f2',
          300: '#945094',
          500: '#4A1548',
          900: '#3B0E39',
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}