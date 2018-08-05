import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";

import LoginScreen from "../screens/LoginScreen/login.screen";
import FillOutInformationScreen from "../screens/FillOutInformationScreen";
import HomeScreen from "../screens/HomeScreen";
import LunchMenuScreen from "../screens/LunchMenuScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import TodoListScreen from "../screens/TodoListScreen";

const SignedOutNav = StackNavigator({
  Login: { screen: LoginScreen },
  FillOutInformation: { screen: FillOutInformationScreen }
});

const HomeStack = StackNavigator({
  Hem: {
    screen: HomeScreen
  },
  Inställningar: {
    screen: SettingsScreen
  }
});

const TodoListStack = StackNavigator({
  TodoList: {
    screen: TodoListScreen
  }
});

const SignedInNav = TabNavigator(
  {
    Hem: { screen: HomeStack },
    TodoList: { screen: TodoListStack },
    Lunch: { screen: LunchMenuScreen },
    Schema: { screen: ScheduleScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Hem") {
          iconName = `ios-home${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        } else if (routeName === "Lunch") {
          iconName = `ios-restaurant${focused ? "" : "-outline"}`;
        } else if (routeName === "Schema") {
          iconName = `ios-calendar${focused ? "" : "-outline"}`;
        } else if (routeName === "TodoList") {
          iconName = `ios-list${focused ? "-box" : ""}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    // TODO: Choose between Tomato and #fcbf0a (school color)
    tabBarOptions: {
      activeTintColor: "#007AFF",
      inactiveTintColor: "gray"
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false
  }
);

export { SignedInNav, SignedOutNav };
