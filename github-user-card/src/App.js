import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './component/usercard';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gUser: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/corellcb')
      .then(response => {
        this.setState({gUser: response.data});
        console.log(this.state.gUser);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <UserCard gUser={this.state.gUser} />

      </div>
    );
  }
}

export default App;
