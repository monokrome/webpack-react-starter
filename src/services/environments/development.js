const path = require('path')

const configuration = require('../../../webpack.config.js')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const ReactRenderingService = require('./index')


// Prepends code for the websocket client
configuration.entry.unshift('webpack-dev-server/client?http://localhost:3030')

// Reload after code compiles
configuration.entry.unshift('webpack/hot/dev-server')

// Hot module replacement is <3
configuration.plugins.push(new webpack.HotModuleReplacementPlugin())

// Pretty names <3
configuration.plugins.push(new webpack.NamedModulesPlugin())


class ReactDevelopmentRenderingService extends ReactRenderingService {
  createServer(options) {
    this.setService(options, new WebpackDevServer(webpack(configuration), {
      hot: true,
      lazy: false,
    }))
  }
}


module.exports = ReactDevelopmentRenderingService
