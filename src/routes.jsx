import React,{Component} from 'react';
import {Route} from 'react-router';
import Current from './components/current.jsx'
import Forecast from './components/forecast.jsx'

class Routes extends Component {
    render(){
        return (
            <div>
                <Route path="/" component={Current}/>
                <Route path="/forecast" component={Forecast}/>
            </div>
        );
    }
}

export default Routes;