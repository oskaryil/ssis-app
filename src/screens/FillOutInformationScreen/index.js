import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import FillOutInformationForm from './components/FillOutInformationForm';
import FillOutNameForm from './components/FillOutNameForm';
import commonStyles from '../../styles/common.styles';
import { fillOutInformation } from '../../redux/auth/actions';

class FillOutInformationScreen extends Component {
  static navigationOptions = {
    title: 'Sista steget'
  };

  constructor(props) {
    super(props);
    this.state = {
      nameFilledOut: false,
      classFilledOut: false
    };
  }

  submitFillOutInformation(values) {
    this.props.fillOutInformation(values);
  }

  render() {
    return (
      <View style={Object.assign(commonStyles.container, { backgroundColor: '#e2e2e2' })}>
        <FillOutNameForm onSubmit={this.submitFillOutInformation.bind(this)} />
        <Text>Innan du kan gå vidare behöver vi några saker ifrån dig!</Text>
        {/* <FillOutInformationForm
            onSubmit={this.submitFillOutInformation.bind(this)}
            /> */}
      </View>
    );
  }
}

export default connect(null, { fillOutInformation })(FillOutInformationScreen);
