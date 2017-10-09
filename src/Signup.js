import React, { Component } from 'react';
import logo from './logo.svg';

class Signup extends Component {
  constructor(props){
    super(props)
    this.state ={
      someone: "mohamed"
    }

    this.handleName = this.handleName.bind(this)
    this.handlePhoneNum = this.handlePhoneNum.bind(this)
  }

  handleName(e) {
    e.preventDefault()
    console.log(e.target.value)
  }

  handlePhoneNum(e) {
    e.preventDefault()
    console.log(e.target.value)
  }

  onSubmit(e){
    this.setState({
      loged: true
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="Signup">
        <h1>Signup</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Enter your full name" onChange={this.handleName}></input>
          <input type="text" placeholder="Enter a phone number" onChange={this.handlePhoneNum}></input>
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;
