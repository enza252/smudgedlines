const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devServer: {
    publicPath: '/',
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
      }
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve('src/'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
  ]
}
