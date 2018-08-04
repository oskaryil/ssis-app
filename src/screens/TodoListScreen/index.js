import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, Modal } from "react-native";
import {
  NavigationBar,
  Screen,
  ScrollView,
  Button,
  View,
  Heading
} from "@shoutem/ui";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input";
import CreateTodoForm from "./components/CreateTodoForm";

import modalStyles from "./styles/modal.styles";
import commonStyles from "../../styles/common.styles";
// import { getFullSchedule } from '../../redux/schedule/actions';
// import ClassCard from './components/ClassCard';

class TodoListScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Att göra",
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      addTodoModalVisible: false
    };
  }

  async componentWillMount() {}

  render() {
    return (
      <Screen styleName="paper">
        <NavigationBar
          title="Att göra"
          styleName="inline"
          rightComponent={
            <Button
              onPress={() => this.setState({ addTodoModalVisible: true })}
            >
              <Ionicons name="ios-add" size={36} />
            </Button>
          }
        />
        <Modal
          visible={this.state.addTodoModalVisible}
          animationType="slide"
          transparent={false}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={modalStyles.container}>
            <Button
              style={modalStyles.closeBtn}
              onPress={() => this.setState({ addTodoModalVisible: false })}
            >
              <Ionicons name="ios-close" size={46} />
            </Button>
            <Heading style={modalStyles.heading}>Lägg till att-göra</Heading>
            <CreateTodoForm
              style={modalStyles.form}
              onSubmit={values => console.log(values)}
            />
          </View>
        </Modal>
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
