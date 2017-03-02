// TODO: This is a prototype. It works, but I'd like to clean it up.


const chalk = require('chalk');
const ejs = require('ejs');
const fs = require('fs');
const http = require('http');
const path = require('path');
const winston = require('winston');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const port = process.env.PORT || 8080;
const address = 'http://localhost:' + port;

const indexTemplate = fs.readFileSync('index.ejs').toString('utf-8');

const ApplicationComponent = require('../components/application').default;


http.createServer(function server(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
  });

  const content = ReactDOMServer.renderToString(<ApplicationComponent />);

  response.end(ejs.render(indexTemplate, {
    htmlWebpackPlugin: {
      options: {initialContent: content},
    },
  }));
}).listen(port);


winston.info(chalk.cyan('Server running at ') + chalk.white(address));
