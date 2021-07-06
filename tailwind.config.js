const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      default: ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: colors.blue,
        orange: {
          DEFAULT: '#F37024',
          50: '#FFFEFE',
          100: '#FEEEE5',
          200: '#FBCFB5',
          300: '#F8AF85',
          400: '#F69054',
          500: '#F37024',
          600: '#D8570C',
          700: '#A84309',
          800: '#773007',
          900: '#471D04',
        },
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
    },
  },
}
