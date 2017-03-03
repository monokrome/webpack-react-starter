const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const local = (...paths) => path.resolve(__dirname, ...paths);
const source = (...paths) => local('src', ...paths);
const lib = (...paths) => local('lib', ...paths);
const assets = (...paths) => local('assets', ...paths);


module.exports = {
  context: source(),

  entry: {
    application: [
      'react-hot-loader/patch',
      source('index.jsx')
    ]
  },

  output: {
    path: lib(),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?modules=true&localIdentName=[hash:8]!postcss-loader',
        }),
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css'],

    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
  },

  devtool: 'inline-source-map',

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.NamedModulesPlugin,

    new HTMLPlugin({
      inject: 'body',
      template: local('index.ejs'),
      initialContent: '',
    }),
  ],
}
