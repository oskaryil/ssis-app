import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from '@shoutem/ui';
import { connect } from 'react-redux';

import { logout } from '../../redux/auth/actions';
import commonStyles from '../../styles/common.styles';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={commonStyles.container}>
        <Button styleName="dark" onPress={() => this.props.logout()}>
          <Text>Logga ut</Text>
        </Button>
      </View>
    );
  }
}

export default connect(null, { logout })(SettingsScreen);
