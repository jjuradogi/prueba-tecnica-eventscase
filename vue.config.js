module.exports = {
  lintOnSave: true,
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/variables.scss";
        `
      }
    }
  }
};
