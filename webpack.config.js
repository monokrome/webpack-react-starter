const path = require("path");
const fs = require("fs");

const APPLICATION_ENTRIES = {};
const SCRIPT_LOADERS = ["babel-loader?retainLines=true"];
const APPLICATIONS_PATH = path.join(__dirname, "src", "applications");

for (const moduleName of fs.readdirSync(APPLICATIONS_PATH))
  APPLICATION_ENTRIES[moduleName] = [path.join(APPLICATIONS_PATH, moduleName)];

module.exports = {
  context: __dirname,
  devtool: "sourcemap",
  entry: APPLICATION_ENTRIES,

  output: {
    path: path.resolve("dist"),
    filename: "index.js"
  },

  resolve: {
    alias: {},
    extensions: [".js", ".jsx"],
    modules: [path.resolve("node_modules"), path.resolve("src")]
  },

  module: {
    loaders: [
      {
        use: SCRIPT_LOADERS,
        test: /\.jsx?$/,

        exclude: [path.resolve("node_modules")]
      },

      {
        test: /\.html$/,
        use: ["file-loader?name=[name].[ext]", "extract-loader", "html-loader"]
      },

      { loader: "url-loader", test: /\.png$/ },
      { loader: "file-loader", test: /\.(ttf|eot|svg)$/ }
    ]
  },

  watchOptions: {
    ignored: /node_modules/
  },

  devServer: {
    port: 3030,
    contentBase: path.resolve("src"),

    stats: "errors-only",

    overlay: {
      warnings: true,
      errors: true
    }
  },

  plugins: []
};
