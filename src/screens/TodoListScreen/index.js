import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, Modal, TouchableOpacity } from "react-native";
import {
  NavigationBar,
  Screen,
  ScrollView,
  Button,
  View,
  Heading,
  ListView
} from "@shoutem/ui";
import { Ionicons } from "@expo/vector-icons";

import { createTodo, fetchTodos } from "../../redux/todoList/actions";
import Input from "../../components/Input";
import CreateTodoForm from "./components/CreateTodoForm";
import modalStyles from "./styles/modal.styles";
import commonStyles from "../../styles/common.styles";
import styles from "./styles/todoList.styles.js";

class TodoListScreen extends Component {
  static navigationOptions = {
    tabBarLabel: "Att göra",
    header: null,
    gesturesEnabled: false
  };

  constructor(props) {
    super(props);

    this.state = {
      addTodoModalVisible: false
    };
  }

  async componentWillMount() {
    await this.props.fetchTodos();
  }

  renderTodos(todo) {
    if (this.props.todoList.todos.length > 0) {
      return (
        <View style={styles.todoItem} key={todo.dueDate}>
          <TouchableOpacity
            style={styles.checkboxTouchable}
            onPress={() => console.log("checked")}
          >
            <View style={styles.checkbox} />
          </TouchableOpacity>
          <Text style={styles.todoItemText}>{todo.title}</Text>
        </View>
      );
    }
  }

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
        <ListView
          loading={this.props.todoList.status.loading}
          data={this.props.todoList.todos ? this.props.todoList.todos : []}
          renderRow={this.renderTodos.bind(this)}
          onRefresh={this.props.fetchTodos}
        />
        <Modal
          visible={this.state.addTodoModalVisible}
          animationType="slide"
          transparent={false}
          onRequestClose={() => {}}
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
              onSubmit={async values => {
                await this.props.createTodo(values);
                this.setState({ addTodoModalVisible: false });
              }}
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
    auth: state.auth,
    todoList: state.todoList
  };
}

export default connect(
  mapStateToProps,
  { fetchTodos, createTodo }
)(TodoListScreen);
