import React, { Component } from 'react';
import './App.css';
import './css/materialize.css'
// import './js/materialize.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import logo from './smiley-phone.png'
import video from './phone-scroll.mp4'

class Home extends Component {
  render() {
    return (
      <div>
        <header>
        <nav>
      <div class="nav-wrapper">
        <div id="logo">
          <img src={logo} href="/" className="App-logo brand-logo" alt="logo" />
          <h1 className="Logo-text brand-logo">iDidit</h1>
        </div>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="sass.html">My Dashboard</a></li>
          <li><a href="/sign-in">Login</a></li>
          <li><a href="collapsible.html">Logout</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li><a href="sass.html">Dashboard</a></li>
          <li><a href="badges.html">Login</a></li>
          <li><a href="collapsible.html">Logout</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <div id="header-1">
    <video id="background-video" loop autoPlay>
      <source src={video} type="video/mp4" />
      <source src={video}  type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  <h1 className="App-title">iDidit</h1>
  <h3> Procrastination meets its match </h3>
  </div>


    <div id="header-2">
      <h4 id="instructions-title"> How it works: </h4>
      <div id="instructions">

        <div class="instruction-steps">
        <i class="large material-icons">assignment</i>
        <h5 className="steps"> 1. Create tasks </h5>
        </div>

        <div class="instruction-steps">
        <i class="large material-icons">sms_failed</i>
        <h5 className="steps"> 2. Receive reminders </h5>
        </div>

        <div class="instruction-steps">
        <i class="large material-icons">done_all</i>
        <h5 className="steps"> 3. Get stuff done </h5>
        </div>

      </div>
      <Link to="/sign-in"> Login </Link>
      <Link to="/sign-up"> Register </Link>
    </div>
  </div>
    )
  }
}

export default Home
