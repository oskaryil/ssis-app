import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { ScrollView, Card, Spinner, NavigationBar, Screen } from '@shoutem/ui';

import commonStyles from '../../styles/common.styles';
import lunchMenuStyles from './lunchMenu.styles';
import { fetchLunchMenu } from '../../redux/lunch/actions';

// const lunchMenu = {
//   Måndag: [
//     'Köttbullar med potatis och lingon',
//     'Fylld paprika på Sojafärs',
//     'Bakad lax med jasminris'
//   ],
//   Tisdag: [
//     'Grillad kycklingbröst med chimichurri och örtris',
//     'Pasta gryta med fetaost och fruktig olivolja G/M/Ä',
//     'Salviabakad kummel med vitvinsås, apelsinbakad tomat och ris M'
//   ],
//   Onsdag: [
//     'Nattbakad fläskkaree med senaps och rotfruktssallad samt kräftigbuljong',
//     'Indisk kikärtsgryta chana masala style med jasminris',
//     'Rostad Torsk samt citronkokt rödbetor och rökt potatis pure M'
//   ],
//   Torsdag: [
//     'Lammgryta med purjolök, fetaost och basmatiris M',
//     'Fransk löksoppa med parmesancrutonger Ä/M Ärtsoppa, vanilj och honungsgrädde, sylt och pankakor Ä/G/M',
//     'Ingefära och soyabakad kummel samt broccoli och ris'
//   ],
//   Fredag: [
//     'Bratwurst med surkål, stekt potatis och senapssky M',
//     'Panko panerade Svampbiffar, rostad potatis och tzatziki G/M',
//     'Rimmad lax med dillstuvad potatis M'
//   ]
// };
Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullYear(), 0, 1);
  return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
};

class LunchMenuScreen extends Component {
  static navigationOptions = {};

  async componentDidMount() {
    await this.props.fetchLunchMenu();
  }

  renderLunch = () => {
    const toRender = [];
    for (let day in this.props.lunchMenu) {
      toRender.push(
        <Card style={{ padding: '3%', width: '98%' }} key={day}>
          <Text style={lunchMenuStyles.dayText} key={day}>
            {day}
          </Text>
          {this.props.lunchMenu[day].map(dish => (
            <Text style={lunchMenuStyles.dishText} key={dish}>
              {dish}
            </Text>
          ))}
        </Card>
      );
    }
    return toRender;
  };

  render() {
    return (
      <Screen styleName="paper">
      <NavigationBar title={`Lunch meny v. ${new Date().getWeek()}`} />
      <ScrollView
        contentContainerStyle={lunchMenuStyles.contentContainer}
        styleName="paper v-scroll">
          <View style={lunchMenuStyles.lunchMenuBox}>
            {/* <Text style={lunchMenuStyles.dayText}>Måndag</Text>
            <Text style={lunchMenuStyles.dayText}>Tisdag</Text> */}
            {this.props.lunchMenu ? this.renderLunch() : <Spinner />}
          </View>
      </ScrollView>

      </Screen>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth, lunchMenu: state.lunch };
}

export default connect(mapStateToProps, { fetchLunchMenu })(LunchMenuScreen);
