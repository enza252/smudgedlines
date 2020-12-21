const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './src',
    publicPath: '/',
    hot: true
  },
  entry: {
    polyfill: '@babel/polyfill',
  },
  output: {
    publicPath: '/public'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: [/node_modules/, '/src/__test__/'],
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, '/src/__test__/'],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        exclude: [/node_modules/, '/src/__test__/'],
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
