import React, { Component } from "react";
import DatePicker from "react-native-datepicker";
import { View, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Paragraph from "../text";

export default class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "" };
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Paragraph bold>{this.props.title}</Paragraph>
        <TouchableHighlight>
          <View
            style={{
              borderBottomColor: "#9e9e9e",
              borderBottomWidth: 1,
              height: 40,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              paddingLeft: 20
            }}
          >
            <DatePicker
              style={{
                width: "100%",
                paddingLeft: 0,
                marginLeft: 0
              }}
              date={this.state.date}
              mode="datetime"
              placeholder=" "
              format="YYYY-MM-DD hh:mm a"
              minDate="2019-05-01"
              maxDate="2019-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={true}
              iconComponent={<Icon name="chevron-down" size={24} />}
              customStyles={{
                dateIcon: {
                  position: "relative",
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  borderWidth: 0,
                  paddingLeft: 0,
                  flexDirection: "row",
                  justifyContent: "flex-start"
                },
                dateText: {
                  fontFamily: "Montserrat-Regular"
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={date => {
                this.setState({ date: date });
              }}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
