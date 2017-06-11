const render = require('./rendering')

function getServiceClass() {
  switch (process.env.NODE_ENV || 'development') {
    case 'production':
      return require('./environments/production')
    default:
      return require('./environments/development')
  }
}

const Service = getServiceClass()
module.exports = new Service(render)
