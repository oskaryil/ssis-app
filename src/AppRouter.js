import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignedOutNav, SignedInNav } from './router';
import { AsyncStorage } from 'react-native';

class AppRouter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // AsyncStorage.clear();
    if (this.props.auth.user !== null && this.props.auth.user.name) {
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
