// src/Login.js

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import OktaSignInWidget from './OktaSignInWidget';
import { withAuth } from './auth';

export default withAuth(class Login extends Component {
  state = {
    redirectToReferrer: false,
    token: null
  };

  componentWillMount() {
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  onSuccess(tokens) {
    console.log(tokens)
    this.props.auth.handleAuthentication(tokens);
    this.setState({
      redirectToReferrer: true,
      token: tokens
    });
  }

  onError(err) {
    console.log('error logging in', err);
  }

  render() {
    let from;
    if (this.props.location && this.props.location.state) {
      from = this.props.location.state;
    } else {
      from = { pathname: '/' };
    }

    if (this.props.auth.isAuthenticated() || this.state.redirectToReferrer) {
      return <Redirect to={from}/>;
    }

    return (
      <div>
      <OktaSignInWidget
        widget={this.props.auth.widget}
        onSuccess={this.onSuccess}
        onError={this.onError}/>
      </div>
    );
  }
});
