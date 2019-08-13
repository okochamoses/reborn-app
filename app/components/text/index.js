import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default ({ dark, light, white, sm, md, lg, bold, thin, centered, children, style, onPress }) => {
  const inlineStyle = [];

  dark ? inlineStyle.push(styles.dark) : null;
  light ? inlineStyle.push(styles.light) : null;
  white ? inlineStyle.push(styles.white) : null;
  sm ? inlineStyle.push(styles.sm) : null;
  md ? inlineStyle.push(styles.md) : null;
  lg ? inlineStyle.push(styles.lg) : null;
  bold ? inlineStyle.push(styles.bold) : null;
  thin ? inlineStyle.push(styles.thin) : null;
  centered ? inlineStyle.push(styles.centered) : null;

  const renderText = () => {
    if (onPress) {
      return (
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.base, inlineStyle, style]}>{children}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <View>
          <Text style={[styles.base, inlineStyle, style]}>{children}</Text>
        </View>
      );
    }
  };

  return renderText();
};
