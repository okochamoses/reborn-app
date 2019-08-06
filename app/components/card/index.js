import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default ({ header, centered, light, children, style }) => {
  const inlineStyle = [];
  centered ? inlineStyle.push(styles.centered) : null;
  light ? inlineStyle.push(styles.light) : null;

  const setHeaderText = () => {
    return header ? <Text style={styles.headerText}>{header}</Text> : null;
  };
  return (
    <View>
      {setHeaderText()}
      <View style={[styles.innerContainer, inlineStyle, style]}>{children}</View>
    </View>
  );
};
