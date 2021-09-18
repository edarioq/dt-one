// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://preprod-dvs-api.dtone.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
