import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './styles/main.scss';
import axios from 'axios';

import store from './redux/store';
axios.defaults.baseURL = "http://54.167.190.182:8098/";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
