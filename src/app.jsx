import React, { Component } from 'react';
import {Router, Route} from 'react-router';
import { createBrowserHistory } from 'history'
import Dashboard from './components/dashboard.jsx'

class App extends Component {

  AppRoute() {
    const history = createBrowserHistory();
        return (
            <Router history={history}>
                <Route path="/" component={Dashboard}/>
            </Router>
        );}

  render() {
    return (
      this.AppRoute()
    );
  }
}

export default App;




