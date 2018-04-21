import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
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
        <Image style={styles.logo} source={require('../../assets/images/ssis_logo.png')} />
        <Text style={styles.mainHeader}>Logga in med ditt SSIS-konto</Text>
        <LoginForm login={this.login.bind(this)} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth, form: state.form };
}

export default connect(mapStateToProps, { login, signup })(LoginScreen);
