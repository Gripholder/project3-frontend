import React, { Component } from 'react';
import logo from './logo.svg';


class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <h1>{this.props.name}</h1>
        <h1>{this.props.phonenum}</h1>
      </div>
    );
  }
}

export default Profile;
