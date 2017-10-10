import React, { Component } from 'react';
import './App.css';
import {
  Link
} from 'react-router-dom'
import logo from './manager.png'



class Home extends Component {
  render() {
    return (
      <Router>
      <div>
        <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Accountabil-a-Buddy</h1>
      <h3> Never procrastinate again! </h3>
    </header>
      {/* <Link to="/dashboard"> My Dashboard </Link> */}

      <p> How it works: </p>
      <div id="instructions">
        <h4 className="steps"> 1. Create an Account </h4>
        <h4 className="steps"> 2. Add Tasks </h4>
        <h4 className="steps"> 3. Get sh*t done </h4>
      </div>
      <Link to="/sign-in"> Login </Link>
      <Link to="/sign-up"> Register </Link>
    </div>
  </Router>
    )
  }
}

export default Home
