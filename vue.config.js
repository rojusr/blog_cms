const path = require("path");

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
  ? '/blog_cms/'
  : '/'
}
