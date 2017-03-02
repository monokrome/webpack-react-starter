const React = require('react');
const dom = require('react-dom/server');
const ejs = require('ejs');
const fs = require('fs');

const indexTemplate = fs.readFileSync('index.ejs').toString('utf-8');
const ApplicationComponent = require('../components/application').default;


export default function render() {
  const content = dom.renderToString(<ApplicationComponent />);

  return ejs.render(indexTemplate, {
    htmlWebpackPlugin: {
      options: {initialContent: content},
    },
  });
}
