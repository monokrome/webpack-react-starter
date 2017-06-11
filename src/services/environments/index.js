class ReactRenderingService {
  constructor(options) {
    options = options || {}
    this.render = options.render
    this.createServer(options)
  }

  createServer() {
    throw new Error(
      'createServer must be implemented on ReactRenderingService subclasses.'
    )
  }

  setService(options, service) {
    this.service = service
    this.listen(options.port)
    return this.service
  }

  handleRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    return response.end(this.render(request))
  }

  listen(port) {
    this.service.listen(process.env.PORT || port || 3030)
  }
}


module.exports = ReactRenderingService
