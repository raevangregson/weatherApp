import ReactDOM from 'react-dom';
import React from 'react';
import App from "./app.jsx";
import {
    BrowserRouter as Router
  } from 'react-router-dom';
import routes from './routes.jsx';
import { createHashHistory } from 'history'

const history = createHashHistory()

ReactDOM.render(
    <Router routes={routes}>
        <App />
    </Router>,
    document.getElementById('root')
  );