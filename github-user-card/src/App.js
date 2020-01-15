import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './component/usercard';
import FollowerList from './component/followerList';

import './App.css';
import FollowerCard from './component/followercard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gUser: [],
      fUsers: []
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
    axios
      .get('https://api.github.com/users/Corellcb/followers')
      .then(response => {
        this.setState({ fUsers: response.data });
        console.log(this.state.fUsers);
      })
      .catch(error => {
        console.log(error);
      })

    
  }

  render() {
    return (
      <div className="App">
        <h1>Github Usercard</h1>
        <UserCard gUser={this.state.gUser} />
        <FollowerList fUsers={this.state.fUsers} />
      </div>
    );
  }
}

export default App;
