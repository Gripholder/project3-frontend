// src/Login.js

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import OktaSignInWidget from './OktaSignInWidget';
import { withAuth } from './auth';
import logo from './smiley-phone.png'


export default withAuth(class Login extends Component {
  state = {
    redirectToReferrer: false,
    token: null,
    name: ''
  };

  componentWillMount() {
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  onSuccess(tokens) {
    this.props.auth.handleAuthentication(tokens);
    this.setState({
      redirectToReferrer: true,
      token: tokens,
      name: tokens[0].claims.email
    });
    console.log(this.state.token)
    console.log(this.state.name)
  }

  onError(err) {
    console.log('error logging in', err);
  }

  render() {
    let from;
    if (this.props.location && this.props.location.state) {
      from = this.props.location.state;
    } else {
      from = { pathname: `/${this.state.name}` };
    }

    if (this.props.auth.isAuthenticated() || this.state.redirectToReferrer) {
      return <Redirect to={from}/>;
    }

    return (
      <div>
        <div class="navbar-fixed">
          <nav>
        <div class="nav-wrapper">
          <div id="logo">
            <img src={logo} href="/" className="App-logo brand-logo" alt="logo" />
            <h1 className="Logo-text brand-logo">iDidit</h1>
          </div>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
          </ul>
          <ul class="side-nav" id="mobile-demo">
            <li><a href="sass.html">Dashboard</a></li>
            <li><a href="badges.html">Login</a></li>
            <li><a href="collapsible.html">Logout</a></li>

          </ul>
        </div>
      </nav>
    </div>
      <OktaSignInWidget
        widget={this.props.auth.widget}
        onSuccess={this.onSuccess}
        onError={this.onError}/>
      </div>
    );
  }
});
