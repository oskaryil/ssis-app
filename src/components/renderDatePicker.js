import React, { Component } from "react";
import { DatePickerIOS, Text, TouchableOpacity } from "react-native";
import { View } from "@shoutem/ui";
import moment from "moment";
import "moment/src/locale/sv";

import styles from "./styles/datepicker.styles";

// NOTE: Current implementation only works for iOS!
class RenderDatePicker extends Component {
  constructor(props) {
    super(props);
    // TODO: Make sure the locale works
    moment.locale("sv");
    this.state = {
      chosenDate: new Date(),
      showDatePicker: false,
      datePicked: false,
      locale: "sv"
    };
  }

  async componentDidMount() {}

  render() {
    const { input, onChange } = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.setState({ showDatePicker: !this.state.showDatePicker })
          }
        >
          <View style={styles.dateTextContainer}>
            <Text style={styles.dateText}>
              {this.state.datePicked
                ? moment(this.state.chosenDate).format("DD/MM/YYYY hh:mm")
                : "Välj datum"}
            </Text>
          </View>
        </TouchableOpacity>
        {this.state.showDatePicker ? (
          <DatePickerIOS
            {...input}
            dateForm="DD/MM/YYYY"
            onDateChange={date => {
              this.setState({ chosenDate: date, datePicked: true });
              input.onChange(date);
            }}
            locale={this.state.locale}
            date={this.state.chosenDate}
          />
        ) : null}
      </View>
    );
  }
}

export default RenderDatePicker;
