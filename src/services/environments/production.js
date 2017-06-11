const express = require('express')
const STATIC_PATH = process.env.STATIC_PATH || 'dist'

const ReactRenderingService = require('./index')

class ReactProductionRenderingService extends ReactRenderingService {
  createServer() {
    const service = express()
    service.use(express.static(STATIC_PATH))
    this.setService(service)
  }
}

module.exports = ReactProductionRenderingService
