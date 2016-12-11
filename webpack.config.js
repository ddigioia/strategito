const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    // './public/javascripts/main.js'
    './public/javascripts/main.js'
  ],
  output: {
    // path: '/',
    // path: './public',
    path: path.join(__dirname, '/public'),
    // path: path.join(__dirname, '/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
