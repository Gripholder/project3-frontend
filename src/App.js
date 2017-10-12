import React, { Component } from 'react';
import Person from './Person.js'
import Task from './Task.js'
import Home from './Home.js'
import Login from './Login.js'
import Protected from './Protected.js'
import SecureRoute from './SecureRoute.js'
import logo from './smiley-phone.png'
import './App.css';

import { Security, ImplicitCallback } from '@okta/okta-react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

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
                exact
                path="/"
                render={(props) => {
                  return (
                    <Home/>
                  )
                }}
              />
              <SecureRoute
                exact path="/home"
                component={Person}
              />

              <Route path='/login'
              component={Login}/>

            <SecureRoute
              path="/:name"
              component={Task}/>)
              }}
            />

              <SecureRoute path='/protected'
              component={Protected}/>
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
