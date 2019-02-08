import React, { Component } from "react";
import NavBar from './components/navBar.jsx'
import './styles.css'

class App extends Component {
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
       <NavBar/>
       <div className='mainContent'>
        
       </div>
       </div>
    );
  }
}

export default App;