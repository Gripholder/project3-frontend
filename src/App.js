import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person.js'
import Dashboard from './Dashboard.js'
import './App.css';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

const config = {
  issuer: 'https://dev-116732.oktapreview.com/oauth2/default',
  redirect_uri:'http://localhost:3000/implicit/callback',
  clientId: '0oaccjxgtf8ZG0nlB0h7'
}



class App extends Component {

  componentDidMount() {

  }
  render() {
    console.log(window.location.origin)
    return (
      <BrowserRouter>
        <Switch>
   <Security issuer={config.issuer}
             client_id={config.clientId}
             redirect_uri={config.redirect_uri} >
     <Route exact path='/' component={Dashboard}/>
     <Route path='/implicit/callback' component={ImplicitCallback} />
   </Security>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Person /> */}
      </div>
    </Switch>
  </BrowserRouter>
    );
  }
}

export default App;
