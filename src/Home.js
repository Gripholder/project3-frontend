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
import logo from './manager.png'



class Home extends Component {
  render() {
    return (
      <div>
        <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">Logo</a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </div>
    </nav>
      <div>

      <hr id="divider-1"/>
      <p> How it works: </p>
      <div id="instructions">
        <h4 className="steps"> 1. Create an Account </h4>
        <h4 className="steps"> 2. Add Tasks </h4>
        <h4 className="steps"> 3. Get sh*t done </h4>
      </div>
      <Link to="/sign-in"> Login </Link>
      <Link to="/sign-up"> Register </Link>
    </div>
  </div>
    )
  }
}

export default Home
