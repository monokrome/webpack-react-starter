const environment = process.env.NODE_ENV || 'development'

const Service = require('./environments/' + environment)


module.exports = new Service({
  render: require('./rendering'),
})
