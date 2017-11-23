import express from 'express'

import render from '../rendering'
import ReactRenderingService from './index'

const STATIC_PATH = process.env.STATIC_PATH || 'dist'

function renderToResponse(request: Object, response: Object) {
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end(render(request))
}

export default class extends ReactRenderingService {
  createServer() {
    const service = express()
    service.use(express.static(STATIC_PATH, {index: false}))
    service.get('/', renderToResponse)
    this.setService(service)
    return service
  }
}
