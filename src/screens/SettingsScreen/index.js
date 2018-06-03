import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text, Heading, Screen, NavigationBar } from '@shoutem/ui';
import { connect } from 'react-redux';

import { logout } from '../../redux/auth/actions';
import commonStyles from '../../styles/common.styles';

class SettingsScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: <NavigationBar hasHistory title="Inställningar" styleName="inline" navigateBack={() => navigation.goBack()} />
  });

  componentDidMount() {
  }

  render() {
    return (
      <Screen styleName="paper">
        <Button styleName="secondary" onPress={() => this.props.logout()}>
          <Text>Logga ut</Text>
        </Button>
      </Screen>
    );
  }
}

export default connect(null, { logout })(SettingsScreen);
