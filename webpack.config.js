const path = require('path')


module.exports = {
  entry: path.resolve('src/index.js'),

  output: {
    path: path.resolve('dist'),
    filename: '[hash].js',
  },

  context: __dirname,

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
      { loader: 'babel-loader', test: /\.jsx?$/, exclude: [path.resolve('node_modules')] },
      { loader: 'style-loader!css-loader', test: /\.css/},
      { loader: 'url-loader', test: /\.png$/},
      { loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
    ],
  },

  devServer: {
    hot: true,
    inline: false,
    contentBase: path.resolve('dist'),
  }
}
