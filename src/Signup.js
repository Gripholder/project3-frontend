import React, { Component } from 'react';
import logo from './logo.svg';

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <form>
          <input type="text" placeholder="Enter a username"></input>
          <input type="text" placeholder="Enter your full name"></input>
          <input type="text" placeholder="Enter your email address"></input>
          <input type="text" placeholder="Enter a phone number"></input>
          <button type="submit"></button>
        </form>
      </div>
    );
  }
}

export default Signup;
