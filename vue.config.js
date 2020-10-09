module.exports = {
    devServer: {
      disableHostCheck: true,
      proxy: 'http://localhost:58836'
    },
  
    transpileDependencies: ['vuetify'],
  
    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false,
      },
    },
  }
  