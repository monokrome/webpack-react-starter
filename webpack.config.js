const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');


const local = (...paths) => path.resolve(__dirname, ...paths);
const source = (...paths) => local('src', ...paths);
const lib = (...paths) => local('lib', ...paths);
const assets = (...paths) => local('assets', ...paths);


module.exports = {
  context: source(),
  entry: [
    'react-hot-loader/patch',
    source('index.jsx')
  ],

  output: {
    path: lib(),
    filename: 'application.js',
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
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
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
    new HTMLPlugin({
      inject: 'body',
      template: local('index.ejs'),
      initialContent: '',
    }),

    new webpack.NamedModulesPlugin,
  ],
}
