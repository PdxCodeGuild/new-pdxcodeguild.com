import { redirects } from './netlify-data/redirects.json'
import { meta } from './netlify-data/meta.json'
import { link } from './netlify-data/link.json'
import router from './config-modules/router.js'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PDX Code Guild',
    htmlAttrs: {
      lang: 'en',
    },
    meta,
    link,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://github.com/nuxt-community/netlify-files-module
    '@nuxtjs/netlify-files',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
    // https://prismic.nuxtjs.org
    '@nuxtjs/prismic',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/sitemap-module/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module/
    '@nuxtjs/robots',
    // https://github.com/WilliamDASILVA/nuxt-facebook-pixel-module#readme
    'nuxt-facebook-pixel-module',
    // https://github.com/nuxt-community/google-gtag-module
    '@nuxtjs/google-gtag',
  ],

  // https://github.com/nuxt-community/sitemap-module/blob/dev/docs/content/en/usage/sitemap.md
  sitemap: {
    hostname: 'https://pdxcodeguild.com',
  },

  robots: {
    UserAgent: '*',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Google Fonts
  googleFonts: {
    download: true,
    families: {
      Raleway: {
        wght: [100, 400, 500, 600, 700, 900],
      },
      Inter: {
        wght: [100, 400, 500, 600, 700, 900],
      },
    },
  },

  // https://github.com/nuxt-community/netlify-files-module
  netlifyFiles: {
    netlifyToml: {
      redirects,
    },
  },

  // https://github.com/WilliamDASILVA/nuxt-facebook-pixel-module#readme
  facebook: {
    pixelId: '182969095929775',
  },

  // https://google-analytics.nuxtjs.org/
  // googleAnalytics: {
  //   id: 'UA-49506024-1',
  // },

  // https://prismic.nuxtjs.org/installation
  prismic: {
    endpoint: 'https://pdxcodeguild.cdn.prismic.io/api/v2',
    modern: true,
  },

  // https://github.com/nuxt-community/google-gtag-module
  'google-gtag': {
    id: 'UA-49506024-1',
		additionalAccounts: [{
			id: 'AW-757120445',
		}],
  },

  router,
}
