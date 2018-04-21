import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import FillOutInformationForm from './components/FillOutInformationForm';
import FillOutNameForm from './components/FillOutNameForm';
import FillOutClassForm from './components/FillOutClassForm';
import commonStyles from '../../styles/common.styles';
import styles from './styles/screen.styles';
import { fillOutInformation } from '../../redux/auth/actions';

class FillOutInformationScreen extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props) {
    super(props);
    this.state = {
      nameFilledOut: false,
      name: '',
      classFilledOut: false
    };
  }

  submitFillOutName(values) {
    this.setState({ nameFilledOut: true, name: values.name });
  }

  submitFillOutInformation(values) {
    this.props.fillOutInformation(Object.assign(values, { name: this.state.name }));
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.nameFilledOut && !this.state.classFilledOut && <FillOutNameForm onSubmit={this.submitFillOutName.bind(this)} />}
        {this.state.nameFilledOut && !this.state.classFilledOut && <FillOutClassForm onSubmit={this.submitFillOutInformation.bind(this)} />}
        {/* <Text>Innan du kan gå vidare behöver vi några saker ifrån dig!</Text> */}
        {/* <FillOutInformationForm
            onSubmit={this.submitFillOutInformation.bind(this)}
            /> */}
      </View>
    );
  }
}

export default connect(null, { fillOutInformation })(FillOutInformationScreen);
