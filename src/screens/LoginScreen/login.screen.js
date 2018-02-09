import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';

import LoginForm from './components/LoginForm';
import styles from './login.styles';
import { login, signup } from '../../redux/auth/actions';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  async login(values) {
    try {
      await this.props.login(values);
      this.props.navigation.navigate('FillOutInformation');
    } catch (err) {
      console.log(err);
      Alert.alert('Woopsie!', 'Användarnamn eller lösenord är inkorrekta.');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeader}>Logga in</Text>
        <LoginForm login={this.login.bind(this)} />
        <Text style={styles.registerButton}>
          Du loggar in med ditt SSIS konto
        </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth, form: state.form };
}

export default connect(mapStateToProps, { login, signup })(LoginScreen);
