import React,{Component} from 'react';
import {Route} from 'react-router';
import Current from './components/current.jsx'
import Forecast from './components/forecast.jsx'

class Routes extends Component {
    render(){
        return (
            <div>
                <Route exact path="/" render={()=><Current search={this.props.search}/>}/>
                <Route path="/forecast" render={()=><Forecast search={this.props.search}/>}/>
            </div>
        );
    }
}

export default Routes;