const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
  devServer: {
    publicPath: '/',
    contentBase: './public',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires >= sass-loader@^8.0.0
            options: {
              implementation: require('sass'),
              sassOptions: {
                indentedSyntax: true // optional
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components/'),
      '@/pages': path.resolve(__dirname, 'src/pages/'),
      '@/context': path.resolve(__dirname, 'src/context/'),
      '@/router': path.resolve(__dirname, 'src/router/'),
      '@/views': path.resolve(__dirname, 'src/views/'),
      '@/plugins': path.resolve(__dirname, 'src/plugins/')
    }
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}
