export default {
  ssr: false,
  head: {
    title: 'Portfolio Shofira',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Libre+Barcode+39&display=swap' }
    ]
  },

  css: [
    '~assets/css/main.css',
  ],

  plugins: [
    { src: '~/plugins/vue-scroll-to.js', mode: 'client' },
    { src: '~/plugins/vue-qr.js', mode: 'client' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    'vue-scrollto/nuxt',
  ],

  build: {
  }
}
