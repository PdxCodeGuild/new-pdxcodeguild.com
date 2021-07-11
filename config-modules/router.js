// This module is imported into nuxt.config.js to overwrite the
// built-in scrollBehavior property of the router config
// The same exact article has been posted by apparently
// 2 different authors, so here's where it's from:
// https://dev.to/dimer191996/nuxt-js-smooth-scrolling-with-hash-links-94a
// https://zachcardoza.com/post/nuxtjs-smooth-scrolling-with-hash-links/
module.exports = {
  /*
   ** Router configuration
   */
  router: {
    scrollBehavior: async (to, _from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        )
      }

      if (to.hash) {
        const el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    },
  },
}
