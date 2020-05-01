import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import './animation.css';
import Promise from 'promise-polyfill';

if(!window.Promise){
  window.Promise = Promise;
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
