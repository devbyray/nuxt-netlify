module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mr Frontend Blog - BETA',
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Beta blog from Mr Frontend with NuxtJS' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Abril+Fatface'},
      {rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=PT+Serif'},
      {rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css'},
      {rel: 'stylesheet', href: '/css/app.css'},

    ]
  },
  generate: {
    minify: {
      collapseBooleanAttributes: false,
      collapseWhitespace: false,
      decodeEntities: false,
      minifyCSS: false,
      minifyJS: false,
      processConditionalComments: false,
      removeAttributeQuotes: false,
      removeComments: false,
      removeEmptyAttributes: false,
      removeOptionalTags: false,
      removeRedundantAttributes: false,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortAttributes: false,
      sortClassName: false,
      trimCustomFragments: false,
      useShortDoctype: false
    }
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'moment'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
