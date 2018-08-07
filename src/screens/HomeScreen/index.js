import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Alert,
  Text as RNText,
  TouchableWithoutFeedback
} from "react-native";
import { connect } from "react-redux";
import qs from "qs";
import {
  Card,
  Heading,
  Text,
  NavigationBar,
  Screen,
  Button,
  Row,
  Subtitle,
  Divider,
  ScrollView
} from "@shoutem/ui";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

import commonStyles from "../../styles/common.styles";
import homeStyles from "./home.styles";
import { getCurrentClass } from "../../redux/schedule/actions";

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
    swipeEnabled: true
  };

  constructor(props) {
    super(props);
    this.state = {
      lunchOfTheDay: null,
      selectedStop: "Kista centrum",
      buses: [],
      metros: []
    };
  }

  componentWillMount() {
    this.props.getCurrentClass();
    // this.getLunchOfTheDay();
    this.fetchRealtidForStop();
  }

  componentDidMount() {
    setInterval(this.props.getCurrentClass, 100000);
  }

  /*
    Function for getting the current class relative to the current time.
      Fetches data from api.ssis.nul/cal with the class of the user as an arg
    This is then displayed in a card in the render method
   */

  getLunchOfTheDay = () => {
    if (this.props.lunchMenu) {
      const { lunchMenu } = this.props;
      const weekDays = Object.keys(lunchMenu);
      const currentDay = new Date().getDay() - 1;
      const lunchOfTheDay = lunchMenu[weekDays[currentDay]];
      this.setState({ lunchOfTheDay });
    }
  };

  fetchRealtidForStop = () => {
    if (this.state.selectedStop) {
      axios({
        method: "get",
        url: `/realtid?site=${this.state.selectedStop}&timeWindow=${15}`,
        headers: {
          Authorization: this.props.auth.user.token
        }
      })
        .then(({ data }) => {
          this.setState({
            buses: data.ResponseData.Buses,
            metros: data.ResponseData.Metros
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  };

  render() {
    return (
      <Screen styleName="paper">
        <NavigationBar
          styleName="inline no-border"
          title={`Välkommen ${this.props.auth.user.name}`}
          rightComponent={
            <Button
              onPress={() => this.props.navigation.navigate("Inställningar")}
            >
              <Ionicons name="ios-settings" size={30} />
            </Button>
          }
        />
        <ScrollView
          style={commonStyles.scrollContainer}
          contentContainerStyle={commonStyles.scrollContentContainer}
        >
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Lunch")}
          >
            <Card style={commonStyles.card}>
              <Heading>Dagens Lunch</Heading>
              <View>
                {this.state.lunchOfTheDay &&
                  this.state.lunchOfTheDay.map(dish => {
                    dish = dish.split(":");
                    const prefix = dish[0];
                    dish.splice(dish[0], 1);
                    dish = dish.join("");
                    return (
                      <RNText key={dish} style={homeStyles.dishText}>
                        <RNText style={homeStyles.boldText}>{prefix}:</RNText>
                        {dish}
                      </RNText>
                    );
                  })}
              </View>
            </Card>
          </TouchableWithoutFeedback>
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
                    {
                      this.props.schedule.currentClass.participants.split(
                        ","
                      )[2]
                    }
                  </Text>
                </View>
              </Card>
            )}
          <Card style={commonStyles.card}>
            <Divider>
              <Subtitle styleName="bold">
                Avgångar - {this.state.selectedStop}
              </Subtitle>
              <Button
                styleName="clear"
                onPress={this.fetchRealtidForStop}
                align="right"
              >
                <Ionicons size={32} name="ios-refresh" />
              </Button>
            </Divider>
            <View>
              {this.state.metros.map(metro => (
                <Text key={metro.ExpectedDateTime}>
                  {metro.Destination} {metro.DisplayTime}
                </Text>
              ))}
            </View>
          </Card>
        </ScrollView>
      </Screen>
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

export default connect(
  mapStateToProps,
  { getCurrentClass }
)(HomeScreen);
