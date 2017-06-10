const glob = require('glob')
const path = require('path')

const webpack = require('webpack')


const applicationEntries = [
  'webpack-dev-server/client?http://localhost:3030',
  'webpack/hot/dev-server',
]


for (const location of glob.sync('src/applications/*/index.jsx'))
  applicationEntries.push(path.resolve(location))


module.exports = {
  context: __dirname,
  entry: () => applicationEntries,

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
    contentBase: path.resolve('src'),

    overlay: {
      warnings: true,
      errors: true,
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
