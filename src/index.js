import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ui/components/main';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store/index'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import App from './App'
export const history = createHistory()
const store = configStore

ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history}>
    <App />
  </ConnectedRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
