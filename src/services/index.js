// TODO: Production-ready server

const path = require('path')

const WebPackDevServer = require('webpack-dev-server')
const configuration = require('../../webpack.config.js')
const webpack = require('webpack')

const render = require('./rendering')


const port = process.env.PORT || 3030
const address = 'http://localhost:' + port
const compiler = webpack(configuration)


function handleRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end(render(request))
}


function bootstrap(app) {
  app.get('*', handleRequest)
}


function onServerReady() {
  console.log('Listening at http://127.0.0.1:' + port)
}


(new WebPackDevServer(compiler, {quiet: true, setup: bootstrap}))
  .listen(port, onServerReady)
