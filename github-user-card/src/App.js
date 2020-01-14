import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: 'Corellcb'
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
