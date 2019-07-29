import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-vector-icons/Ionicons";
import color from "../../utils/colors";

class Footer extends Component {
  render() {
    return <View style={styles.footer}></View>;
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 50,
    borderTopWidth: 1,
    borderTopColor: color.placeholderText
  }
});

export default Footer;
