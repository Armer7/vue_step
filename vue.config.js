module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/variables.scss";`
      },
    },
  },
};