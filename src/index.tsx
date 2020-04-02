import * as FullStory from '@fullstory/browser';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

document.body.className = 'bg-light';

FullStory.init({ orgId: process.env.REACT_APP_FULLSTORY_ORG });

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, 
  document.getElementById('root')
);

