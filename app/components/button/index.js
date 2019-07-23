import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./style";

function Button(props) {
  return (
    <TouchableHighlight style={styles.button} {...props}>
      <View>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
}

module.exports = Button;
