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
                  <Home />
                )
              }}
            />
          </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
