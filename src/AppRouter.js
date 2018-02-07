import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignedOutNav, SignedInNav } from './router';
import { AsyncStorage } from 'react-native';

class AppRouter extends Component {
  render() {
    if (this.props.auth.loggedIn && this.props.auth.informationFilledOut) {
      return <SignedInNav />;
    } else {
      return <SignedOutNav />;
    }
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, null)(AppRouter);
