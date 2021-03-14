export default {
  ssr: false,
  head: {
    title: 'Portfolio Shofira',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website Portfolio Shofira Khairunnisa' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap' },
    ]
  },

  css: [
    '~assets/css/main.css',
  ],

  purgeCSS: {    
    whitelist: ['dark-mode'],  
  },

  plugins: [
    { src: '~/plugins/vue-scroll-to.js', mode: 'client' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  modules: [
    'vue-scrollto/nuxt',
    'nuxt-i18n'
  ],

  build: {
  }
}
