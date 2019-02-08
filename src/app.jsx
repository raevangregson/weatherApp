import React, { Component } from "react";
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
        testing, testing
      </div>
    );
  }
}

export default App;