import React, { Component } from "react";
import NavBar from './navBar.jsx'
import DashboardRouter from '../routes';
import '../styles.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
    this.fetchData = this.fetchData.bind(this);
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    //TODO
  }

  render() {  
    return (
      <div>
       <NavBar history={this.props.history}/>
       <div className='mainContent'>
       <DashboardRouter/>
       </div>
       </div>
    );
  }
}

export default Dashboard;