module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'aqua': {
          DEFAULT: '#ADDADE',
          '50': '#FCFDFD',
          '100': '#F9FCFC',
          '200': '#F3F9FA',
          '300': '#E7F4F5',
          '400': '#CAE7EA',
          '500': '#ADDADE',
          '550': '#99D1D6',
          '600': '#85C8CE',
          '650': '#71BFC6',
          '700': '#5DB6BE',
          '750': '#4FA8B0',
          '800': '#419AA2',
          '850': "#39878E",
          '900': '#31747A'
        }
      }
    },
  },
  variants: {
    extend: {backgroundColor: ['active']},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
