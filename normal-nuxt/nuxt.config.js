import axios from 'axios';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  privateRuntimeConfig: {
    token: process.env.TOKEN,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'normal-nuxt',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate:{
    async routes(){
      const posts = (await axios.get('https://qiita.com/api/v2/items?page=1&per_page=100',
        {
          headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
          }
        })
      ).data

      const postRoutes = posts.map(post=>{
        return{
          route:`/post/${post.id}`,
          payload:post
        }
      })
      return [
        {
          route:"/post",
          payload: posts
        },
        ...postRoutes
      ]
    }
  }
}
