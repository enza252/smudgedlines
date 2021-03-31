const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
//
module.exports = {
  devServer: {
    publicPath: '/',
    //     contentBase: './public',
    //     hot: true,
    //     historyApiFallback: true
  },
  //   entry: './src/index.js',
  //   output: {
  //     path: path.resolve(__dirname, './dist'),
  //     filename: 'index_bundle.js',
  //   },
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
