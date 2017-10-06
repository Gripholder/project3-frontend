import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person.js'
import Task from './Task.js'
import Home from './Home.js'
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      phonenum: ""
    }
  }


  render() {
    return (
      <Router>
        <div>

    </div>
      </Router>
    );
  }
}

export default App;
