import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen/login.screen';
import FillOutInformationScreen from '../screens/FillOutInformationScreen';
import HomeScreen from '../screens/HomeScreen';
import LunchMenuScreen from '../screens/LunchMenuScreen';

// export default TabNavigator(
//   {
//     Home: { screen: HomeScreen }
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-home${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Settings') {
//           iconName = `ios-options${focused ? '' : '-outline'}`;
//         }
//
//         // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons
//         return <Ionicons name={iconName} size={25} color={tintColor} />;
//       }
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray'
//     },
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     animationEnabled: false,
//     swipeEnabled: false
//   }
// );

const SignedOutNav = StackNavigator({
  Login: { screen: LoginScreen },
  FillOutInformation: { screen: FillOutInformationScreen }
});

const SignedInNav = TabNavigator(
  {
    Hem: { screen: HomeScreen },
    Lunch: { screen: LunchMenuScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Hem') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Lunch') {
          iconName = `ios-restaurant${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true
  }
);

export { SignedInNav, SignedOutNav };
