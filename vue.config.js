module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /test\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
}
