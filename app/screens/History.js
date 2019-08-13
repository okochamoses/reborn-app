import React, { Component } from "react";
import { View, StyleSheet, Image, Text, Dimensions, FlatList, TouchableHighlight } from "react-native";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        contentContainerStyle={{
          flex: 1,
          backgroundColor: "#E8ECF2",
          flexDirection: "column"
        }}
      >
        <Text>History</Text>
      </View>
    );
  }
}

export default History;
