import React, { Component } from 'react';
import logo from './logo.svg';
import Signup from './Signup.js';
import './Profile.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      name: "",
      email: "",
      phonenum: ""
    }
  }
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </Router>
    );
  }
}

export default Profile;
