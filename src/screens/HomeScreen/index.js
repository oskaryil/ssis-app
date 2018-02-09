import React, { Component } from 'react';
import { View, TouchableOpacity, Alert, Text as RNText } from 'react-native';
import { connect } from 'react-redux';
import { Card, Heading, Text } from '@shoutem/ui';
import axios from 'axios';

import commonStyles from '../../styles/common.styles';
import homeStyles from './home.styles';
import { getCurrentClass } from '../../redux/schedule/actions';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      lunchOfTheDay: null
    };
  }

  componentWillMount() {
    this.props.getCurrentClass();
    this.getLunchOfTheDay();
  }

  componentDidMount() {
    setInterval(this.props.getCurrentClass, 100000);
  }

  /*
    Function for getting the current class relative to the current time.
      Fetches data from api.ssis.nul/cal with the class of the user as an arg
    This is then displayed in a card in the render method
   */
  // getCurrentClass = async () => {
  //   /*
  //   * const fakeClassData = {
  //   *  start_time: '18:00',
  //   *  end_time: '20:00',
  //   *  subject: 'Webbutveckling 1'
  //   * };
  //   */
  //   const { data } = await axios.get(
  //     `https://api.ssis.nu/cal/?room=${this.props.auth.user.class}`
  //   );
  //   const now = new Date().getTime();
  //   let currentClass;
  //   for (let i = 0; i < data.length; i++) {
  //     const nowDate = new Date();
  //     var date =
  //       nowDate.getFullYear() +
  //       '-0' +
  //       (nowDate.getMonth() + 1) +
  //       '-0' +
  //       nowDate.getDate();
  //     let start = Date.parse(`${date} ${data[i].start_time}`);
  //     let end = Date.parse(`${date} ${data[i].end_time}`);
  //     if (start > end) {
  //       // check if start comes before end
  //       var temp = start; // if so, assume it's across midnight
  //       start = end; // and swap the dates
  //       end = temp;
  //     }
  //     if (now < end && now > start) {
  //       currentClass = data[i];
  //       break;
  //     } else {
  //       // else if (now + 30 * 60 > start) {
  //       //   currentClas = data[i];
  //       // }
  //       currentClass = null;
  //     }
  //   }
  //   this.setState({ currentClass });
  // };

  getLunchOfTheDay = () => {
    if (this.props.lunchMenu) {
      const { lunchMenu } = this.props;
      const weekDays = Object.keys(lunchMenu);
      const currentDay = new Date().getDay() - 1;
      const lunchOfTheDay = lunchMenu[weekDays[currentDay]];
      this.setState({ lunchOfTheDay });
    }
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
            {this.state.lunchOfTheDay &&
              this.state.lunchOfTheDay.map(dish => {
                dish = dish.split(':');
                const prefix = dish[0];
                dish.splice(dish[0], 1);
                dish = dish.join('');
                return (
                  <RNText style={homeStyles.dishText}>
                    <RNText style={homeStyles.boldText}>{prefix}:</RNText>
                    {dish}
                  </RNText>
                );
              })}
          </View>
        </Card>
        <Card style={commonStyles.card}>
          <Heading>Canvas avisering</Heading>
          <View>
            <Text>Nytt betyg rapporterat i Svenska 3</Text>
          </View>
        </Card>
        {/* <Text>{new Date().getTimezoneOffset()}</Text> */}
        {this.props.schedule.currentClass !== null &&
          !this.props.schedule.fetching && (
            <Card style={commonStyles.card}>
              <Heading>Lektion just nu</Heading>
              <View>
                <Text>
                  {this.props.schedule.currentClass.subject} i
                  {this.props.schedule.currentClass.participants.split(',')[2]}
                </Text>
              </View>
            </Card>
          )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    form: state.form,
    schedule: state.schedule,
    lunchMenu: state.lunch
  };
}

export default connect(mapStateToProps, { getCurrentClass })(HomeScreen);
