import React, { Component } from 'react';
import Person from './Person.js'
import Task from './Task.js'
import Home from './Home.js'
import logo from './manager.png'
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
  constructor(props){
    super(props)
    this.state = {
      name: "",
      phone: ""
    }
  }

  render() {
    return (
      <Router>
        <div>
          <nav>

         </nav>
          <main>
            <Switch>
            <Route
              path="/"
              render={(props) => {
                return (
                  <Person />
                )
              }}
            />
            <Route
              path="/:name"
              render={ (props) => (
                <Task {...props}/>
              )}
            />
          </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
