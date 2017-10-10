import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person.js'
import SecureRoute from './SecureRoute';
import Dashboard from './Dashboard';
import Login from './Login';
import Protected from './Protected';
import './App.css';
import { Security, ImplicitCallback } from '@okta/okta-react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact={true} component={Dashboard}/>
          <SecureRoute path='/protected' component={Protected}/>
          <Route path='/login' component={Login}/>
        </div>
  </BrowserRouter>
    );
  }
}

export default App;
