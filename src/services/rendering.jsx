const DOM = require('react-dom/server')
const React = require('react')
const fs = require('fs')


const Application = require('../components/application').default
const {ServerStyleSheet} = require('styled-components')


module.exports = (request) => {
  const sheet = new ServerStyleSheet
  const document = DOM.renderToString(sheet.collectStyles(<Application />))
  const stylesheet = sheet.getStyleTags()

  return `<!DOCTYPE html>
    
    <html>
      <head>
        <meta charset=UTF-8>
        <title>Welcome to React</title>
        ${ stylesheet }
      </head>

      <body>
        <div id="root">${ document }</div>
        <script src=/index.js></script>
      </body>
    </html>
  `
}
