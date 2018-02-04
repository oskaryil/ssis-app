import React, { Component } from 'react';
import { View, Text } from 'react-native';

import LoginForm from './components/LoginForm';
import styles from './login.styles';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeader}>Logga in</Text>
        <LoginForm />
      </View>
    );
  }
}

export default LoginScreen;
