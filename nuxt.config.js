export default {
  target: 'static',

  head: {
    title: 'nuxt-pop-corn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxt/image'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  axios: {},

  pwa: { manifest: { lang: 'en' } },

  build: {},

  env: { TMDB_API_KEY: process.env.TMDB_API_KEY },

  image: { domains: ['image.tmdb.org'] },
}
