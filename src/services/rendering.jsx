import DOM from 'react-dom/server'
import React from 'react'
import fs from 'fs'

import {ServerStyleSheet} from 'styled-components'

import Application from '../components/application'

export default function render(request: Object) {
  const sheet = new ServerStyleSheet()
  const document = DOM.renderToString(sheet.collectStyles(<Application />))
  const stylesheet = sheet.getStyleTags()

  return `
    <DOCTYPE html>

    <html>
      <head>
        <meta charset=UTF-8>
        <title>Welcome to React</title>
        ${stylesheet}
      </head>

      <body>
        <div id="root">${document}</div>
        <script src=/index.js></script>
      </body>
    </html>
  `
}
