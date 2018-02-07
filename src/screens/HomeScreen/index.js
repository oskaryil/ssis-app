import React, { Component } from 'react';
import { View, TouchableOpacity, Alert, Text as RNText } from 'react-native';
import { connect } from 'react-redux';
import { Card, Heading, Text } from '@shoutem/ui';
import axios from 'axios';

import commonStyles from '../../styles/common.styles';
import homeStyles from './home.styles';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      currentClass: null,
      lastCheckedForClass: new Date().getTime()
    };
  }

  componentWillMount() {
    this.getCurrentClass();
  }

  componentDidMount() {
    setInterval(this.getCurrentClass, 100000);
  }

  /*
    Function for getting the current class relative to the current time.
    Fetches data from api.ssis.nul/cal with the class of the user as an arg
    This is then displayed in a card in the render method
   */
  getCurrentClass = async () => {
    /*
    * const fakeClassData = {
    *  start_time: '18:00',
    *  end_time: '20:00',
    *  subject: 'Webbutveckling 1'
    * };
    */
    const { data } = await axios.get(
      `https://api.ssis.nu/cal/?room=${this.props.auth.user.class}`
    );
    const now = new Date().getTime();
    let currentClass;
    for (let i = 0; i < data.length; i++) {
      const nowDate = new Date();
      var date =
        nowDate.getFullYear() +
        '-0' +
        (nowDate.getMonth() + 1) +
        '-0' +
        nowDate.getDate();
      let start = Date.parse(`${date} ${data[i].start_time}`);
      let end = Date.parse(`${date} ${data[i].end_time}`);
      if (start > end) {
        // check if start comes before end
        var temp = start; // if so, assume it's across midnight
        start = end; // and swap the dates
        end = temp;
      }
      if (now < end && now > start) {
        currentClass = data[i];
      } else {
        currentClass = null;
      }
    }
    this.setState({ currentClass });
  };

  render() {
    return (
      <View style={[commonStyles.container, { backgroundColor: '#eeeeee' }]}>
        <RNText style={homeStyles.header}>
          Välkommen {this.props.auth.user.name}
        </RNText>
        <Card style={commonStyles.card}>
          <Heading>Dagens Lunch</Heading>
          <View>
            <Text>Kött: Köttfärslimpa med potatispuré och lingon</Text>
          </View>
        </Card>
        <Card style={commonStyles.card}>
          <Heading>Canvas avisering</Heading>
          <View>
            <Text>Nytt betyg rapporterat i Svenska 3</Text>
          </View>
        </Card>
        {this.state.currentClass !== null && (
          <Card style={commonStyles.card}>
            <Heading>Lektion just nu</Heading>
            <View>
              <Text>{this.state.currentClass.subject}</Text>
            </View>
          </Card>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth, form: state.form };
}

export default connect(mapStateToProps, {})(HomeScreen);
