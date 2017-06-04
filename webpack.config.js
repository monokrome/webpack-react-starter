const glob = require('glob')
const path = require('path')


const pageFiles = []


for (const location of glob.sync('src/pages/*/index.jsx'))
  pageFiles.push(path.resolve(location))


module.exports = {
  context: __dirname,
  entry: pageFiles,

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
      {loader: 'babel-loader', test: /\.jsx?$/, exclude: [path.resolve('node_modules')] },
      {loader: 'file-loader?name=index.css!extract-loader!css-loader', test: /\.css$/},
      {loader: 'url-loader', test: /\.png$/},
      {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},

      {test: /\.html$/, use: [
        'file-loader?name=[name].[ext]',
        'extract-loader',
        'html-loader',
      ]},
    ],
  },

  watchOptions: {
    ignored: /node_modules/,
  },

  devServer: {
    hot: true,
    inline: true,
    stats: 'errors-only',
    port: 3030,
    contentBase: path.resolve('dist'),

    overlay: {
      warnings: true,
      errors: true,
    },
  },
}
