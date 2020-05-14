import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'

ReactDOM.render(
  //Any component now has access to the store via the provider tag
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,

  document.getElementById('root')
);

