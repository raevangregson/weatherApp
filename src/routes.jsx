import React from 'react';
import { Router, Route } from 'react-router';
import App from "./app.jsx";
import Current from './components/current.jsx';
import Forecast from './components/forecast.jsx';

const createRoutes = () => (
    <Router>
      <Route exact path="/" component={App}/>
      <Route exact path="/current" component={Current}/>
      <Route exact path="/forecast" component={Forecast}/>
    </Router>
);

export default createRoutes;