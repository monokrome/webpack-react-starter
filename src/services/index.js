const WebPackDevServer = require('webpack-dev-server');

const chalk = require('chalk');
const configuration = require('../../webpack.config.js');
const path = require('path');
const webpack = require('webpack');
const winston = require('winston');
const render = require('./rendering').default;

const port = process.env.PORT || 8080;
const address = 'http://localhost:' + port;

const compiler = webpack(configuration);
const services = new WebPackDevServer(compiler, {});


services.listen(port, function () {
  winston.info(chalk.cyan('Server running at ') + chalk.white(address));
});
