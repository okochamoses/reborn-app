import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class AlertModal extends Component {
  constructor(props) {
    super(props);
    console.log("Modal");
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => this.props.navigation.goBack()} title="Dismiss" />
      </View>
    );
  }
}

module.exports = AlertModal;
