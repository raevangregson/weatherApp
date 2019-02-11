import React, { Component } from "react";
import NavBar from './navBar.jsx'
import DashboardRouter from '../routes';
import '../styles.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        search:48438
    }
    this.zipChange = this.zipChange.bind(this)
  }

  //this updates the zipcode that we passs to our router components below
  zipChange(zip){
    console.log(zip)
      this.setState({
          search:zip
      })
  }

  render() {  
    return (
      <div>
       <NavBar zipChange={this.zipChange} history={this.props.history}/>
       <div className='mainContent'>
       <DashboardRouter search={this.state.search} />
       </div>
       </div>
    );
  }
}

export default Dashboard;