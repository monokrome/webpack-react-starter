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

        use: 'babel-loader?' + JSON.stringify({
          "plugins": [
            "react-hot-loader/babel",
          ],

          "presets": [
            ["es2015", { "modules": false }],
            "stage-2",
            "react"
          ]
        }),
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],

    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
  },

  devtool: 'inline-source-map',

  plugins: [
    new HTMLPlugin({
      title: 'React + Webpack2',
      inject: 'body',
      template: source('index.ejs'),
    }),

    new webpack.NamedModulesPlugin,
  ],
}
