import './index.css';


import React from 'react';
import ReactDOM from 'react-dom';

import fetch from 'isomorphic-fetch';

import { AppContainer } from 'react-hot-loader';
import ApplicationComponent from './components/application';


function render() {
  ReactDOM.render(
    <AppContainer>
      <ApplicationComponent />
    </AppContainer>,
    document.getElementById('application-root')
  );
}


render();


// TBH, I have no idea what this is doing. :)
if (module.hot) module.hot.accept('./components/application', render);
