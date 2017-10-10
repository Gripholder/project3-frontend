import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Task from './Task'
import Home from './Home'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root'));
registerServiceWorker();
