module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/variables.scss";`
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue_step/'
    : '/'
};
