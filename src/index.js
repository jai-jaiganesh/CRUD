// require('dotenv').config();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from 'react-router-dom';
import memberReducer from './redux/reducers/memberReducers';
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { Provider } from 'react-redux';

const store= createStore(memberReducer,composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>,
  document.getElementById('root')
);


reportWebVitals();
