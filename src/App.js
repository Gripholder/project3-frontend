import React, { Component } from 'react';
import Person from './Person.js'
import Task from './Task.js'
import Home from './Home.js'
import logo from './smiley-phone.png'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-445082.oktapreview.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oacazdm3iYOfKuVd0h7'
}

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/* <header>
          <div class="navbar-fixed">
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
      </div>
      </header> */}
          <main>
            <Switch>
              <Route
                exact path="/home"
                render={(props) => {
                  return (
                    <Person />
                  )
                }}
              />

            <Route
              path="/:name"
              render={ (props) => {
                return(<Task {...props}/>)
              }}
            />

              <Route
                path="/"
                render={(props) => {
                  return (
                    <Home />
                  )
                }}
              />
            {/* <Route
              path="/sign-up"
              render={(props) => {
                return (
                  <Person />
                )
              }}
            /> */}
          </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
