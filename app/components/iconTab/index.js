import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../utils/colors";

const IconTab = props => {
  return (
    <View style={styles.container}>
      <Icon name={props.name} style={styles.icon} />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default IconTab;

const styles = StyleSheet.create({
  container: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 5,
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#f3f3f3"
  },
  icon: {
    fontSize: 40,
    color: colors.placeholderText
  },
  text: {
    textTransform: "capitalize",
    fontFamily: "Montserrat-Regular",
    fontSize: 10,
    textAlign: "center"
  }
});
