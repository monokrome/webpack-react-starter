const glob = require('glob')
const path = require('path')

const webpack = require('webpack')

const APPLICATION_ENTRIES = []
const PLUGINS = []
const SCRIPT_LOADERS = ['babel-loader']


for (const location of glob.sync('src/applications/*/index.jsx')) {
  APPLICATION_ENTRIES.push(path.resolve(location))
}


module.exports = {
  context: __dirname,
  entry: APPLICATION_ENTRIES,

  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
  },

  resolve: {
    alias: {},
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
    ],
  },

  module: {
    loaders: [
      {
        use: SCRIPT_LOADERS,
        test: /\.jsx?$/,

        exclude: [
          path.resolve('node_modules'),
        ],
      },

      {
        test: /\.html$/,
        use: [
          'file-loader?name=[name].[ext]',
          'extract-loader',
          'html-loader',
        ],
      },

      {loader: 'url-loader', test: /\.png$/},
      {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
    ],
  },

  watchOptions: {
    ignored: /node_modules/,
  },

  devServer: {
    port: 3030,
    contentBase: path.resolve('src'),

    hot: true,
    inline: true,

    stats: 'errors-only',

    overlay: {
      warnings: true,
      errors: true,
    },
  },

  plugins: PLUGINS,
}
