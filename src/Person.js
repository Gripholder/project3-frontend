import React, { Component } from 'react';
import logo from './logo.svg';
import Profile from './Profile.js'
import Signup from './Signup.js'

class Person extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      phonenum: null,
      loged: false
    }
  }




  render() {
        var profile = <Profile name={this.state.name} phonenum={this.state.phonenum}/>
        var signup = <Signup name={this.state.name} phonenum={this.state.phonenum}/>
    return (
      <div className="Person">
        <h1>Person</h1>
        {this.state.loged && profile}
        {!this.state.loged && signup}
        </div>
    );
  }
}

export default Person;
