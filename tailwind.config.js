module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      container: {
        center: 'true',
        padding: '1rem',
      },
      colors: {
        primary: '#FFDF2B',
        secondary: '#F9A826',
        light: '#ffdca4',
        navy: '#293543',
        orange: '#ef6c00',
      }
    },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
}
