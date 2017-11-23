import render from './rendering'

function getServiceClass() {
  switch (process.env.NODE_ENV || 'development') {
    case 'production':
      return require('./environments/production').default
    default:
      return require('./environments/development').default
  }
}

const Service = getServiceClass()
export default new Service(render)
