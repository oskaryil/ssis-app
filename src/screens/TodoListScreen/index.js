import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import { NavigationBar, Screen, ScrollView, Button } from "@shoutem/ui";
import { Ionicons } from "@expo/vector-icons";

// import scheduleStyles from './schedule.styles';
import commonStyles from "../../styles/common.styles";
// import { getFullSchedule } from '../../redux/schedule/actions';
// import ClassCard from './components/ClassCard';

class TodoListScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Att göra"
  };

  constructor(props) {
    super(props);
  }

  async componentWillMount() {}

  render() {
    return (
      <Screen styleName="paper">
        <NavigationBar
          title="Att göra"
          styleName="inline"
          rightComponent={
            <Button onPress={() => console.log("hello")}>
              <Ionicons name="ios-add" size={36} />
            </Button>
          }
        />
      </Screen>
    );
  }
}

function mapStateToProps(state) {
  return {
    schedule: state.schedule,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  {}
)(TodoListScreen);
