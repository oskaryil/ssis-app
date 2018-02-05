import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';

import commonStyles from '../../styles/common.styles';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={commonStyles.container}>
        <Text>Hem</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth, form: state.form };
}

export default connect(mapStateToProps, {})(HomeScreen);
