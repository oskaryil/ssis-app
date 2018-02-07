import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card } from '@shoutem/ui';

import commonStyles from '../../styles/common.styles';
import lunchMenuStyles from './lunchMenu.styles';

const lunchMenu = {
  Måndag: [
    'Köttbullar med potatis och lingon',
    'Fylld paprika på Sojafärs',
    'Bakad lax med jasminris'
  ],
  Tisdag: [
    'Grillad kycklingbröst med chimichurri och örtris',
    'Pasta gryta med fetaost och fruktig olivolja G/M/Ä',
    'Salviabakad kummel med vitvinsås, apelsinbakad tomat och ris M'
  ],
  Onsdag: [
    'Nattbakad fläskkaree med senaps och rotfruktssallad samt kräftigbuljong',
    'Indisk kikärtsgryta chana masala style med jasminris',
    'Rostad Torsk samt citronkokt rödbetor och rökt potatis pure M'
  ],
  Torsdag: [
    'Lammgryta med purjolök, fetaost och basmatiris M',
    'Fransk löksoppa med parmesancrutonger Ä/M Ärtsoppa, vanilj och honungsgrädde, sylt och pankakor Ä/G/M',
    'Ingefära och soyabakad kummel samt broccoli och ris'
  ],
  Fredag: [
    'Bratwurst med surkål, stekt potatis och senapssky M',
    'Panko panerade Svampbiffar, rostad potatis och tzatziki G/M',
    'Rimmad lax med dillstuvad potatis M'
  ]
};

class LunchMenuScreen extends Component {
  static navigationOptions = {};

  renderLunchMenu = () => {
    const keys = Object.keys(lunchMenu);
    // return keys.map(day => {
    //   // console.log(dishes);
    //   return (
    //     <Text>{day}</Text>
    //
    //   );
    // });
    //
    //
    const toRender = [];
    for (let day in lunchMenu) {
      const dishes = lunchMenu[day].map(dish => <Text>{dish}</Text>);
      // toRender.push(
      //   <Text style={lunchMenuStyles.dayText} key={day}>
      //     {day}
      //   </Text>
      // );
      toRender.push(<View>{dishes}</View>);
      for (let dish of lunchMenu[day]) {
        // toRender.push(
        //   <Text style={lunchMenuStyles.dishText} key={dish}>
        //     {dish}
        //   </Text>
        // );
      }
    }
    return toRender;
  };

  renderLunch = () => {
    const toRender = [];
    for (let day in lunchMenu) {
      toRender.push(
        <Card style={{ padding: '3%', width: '98%' }} key={day}>
          <Text style={lunchMenuStyles.dayText} key={day}>
            {day}
          </Text>
          {lunchMenu[day].map(dish => (
            <Text style={lunchMenuStyles.dishText} key={dish}>
              {dish}
            </Text>
          ))}
        </Card>
      );
    }
    return toRender;
    // let day = lunchMenu[monday]
    // return(
    //   <View>
    //     <Text>{day}</Text>
    //     <Text>{day.meat}</Text>
    //     <Text>{dishes.fish}</Text>
    //     <Text>{dishes.veg}</Text>
    //   </View>
    // )
    // }
  };

  render() {
    return (
      <ScrollView
        style={lunchMenuStyles.container}
        contentContainerStyle={lunchMenuStyles.contentContainer}
      >
        <Text style={lunchMenuStyles.header}>Eatery Lunch meny v. 6</Text>
        <View style={lunchMenuStyles.lunchMenuBox}>
          {/* <Text style={lunchMenuStyles.dayText}>Måndag</Text>
          <Text style={lunchMenuStyles.dayText}>Tisdag</Text> */}
          {this.renderLunch()}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, {})(LunchMenuScreen);
