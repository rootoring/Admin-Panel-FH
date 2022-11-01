export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Admin_Panel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com"},
      { href:"https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap", rel: "stylesheet"},
    ],
    script: [
      { hid: 'avesome', crossorigin:'anonymous', src: 'https://kit.fontawesome.com/42a8ed112b.js', defer: true }
    ]  
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '@/assets/scss/main.scss'
  ], 

  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3003,
  },  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: process.env.HOST_API || 'http://localhost:3001'
  },

 auth: {
    redirect: {
      login: '/auth',
      logout: '/auth',
      callback: '/auth',
      home: '/',
    },
    strategies: {
      local: {
        token: {
          property: 'acsessToken',
          global: true,
          type: 'Bearer'
        },
        endpoints: {
          login: { url: 'http://localhost:3002/api/v1/auth/signin', method: 'post' },
          logout: { url: 'http://localhost:3002/api/v1/auth/logout', method: 'post' },
          user: { url: 'http://localhost:3002/api/v1/auth/user', method: 'get' },
        },
      },
    }
  },

  router: {
  middleware: ['auth']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
