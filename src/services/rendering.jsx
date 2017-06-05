const DOM = require('react-dom/server')
const React = require('react')
const fs = require('fs')


const Application = require('../components/application').default


module.exports = (request) => DOM.renderToString(<Application />)
