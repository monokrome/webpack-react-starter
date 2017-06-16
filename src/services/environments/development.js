const configuration = require("../../../webpack.config.js");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const ReactRenderingService = require("./index");

const DEV_CLIENT_PATH = "webpack-dev-server/client?http://localhost:3030";

configuration.plugins.push(new webpack.HotModuleReplacementPlugin());
configuration.plugins.push(new webpack.NamedModulesPlugin());

// Prepends code for the websocket client and HMR support
for (const key in configuration.entry) {
  configuration.entry[key].unshift(DEV_CLIENT_PATH);
  configuration.entry[key].unshift("webpack/hot/dev-server");
}

class ReactDevelopmentRenderingService extends ReactRenderingService {
  createServer() {
    this.setService(
      new WebpackDevServer(webpack(configuration), {
        hot: true,
        lazy: false
      })
    );
  }
}

module.exports = ReactDevelopmentRenderingService;
