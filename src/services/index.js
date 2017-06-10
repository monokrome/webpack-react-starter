// TODO: Production-ready server

const configuration = require('../../webpack.config.js')
const webpack = require('webpack')

const render = require('./rendering')

const WebPackDevServer = require('webpack-dev-server')

const port = process.env.PORT || 3030
const compiler = webpack(configuration)

function handleRequest(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.end(render())
}

function bootstrap(app) {
  app.get('/', handleRequest)
}

new WebPackDevServer(compiler, {setup: bootstrap}).listen(port)
