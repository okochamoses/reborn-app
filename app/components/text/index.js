import React from "react";
import { Text } from "react-native";
import styles from "./style";

export default ({ dark, light, sm, md, lg, bold, thin, centered, children, style }) => {
  const inlineStyle = [];

  dark ? inlineStyle.push(styles.dark) : null;
  light ? inlineStyle.push(styles.light) : null;
  sm ? inlineStyle.push(styles.sm) : null;
  md ? inlineStyle.push(styles.md) : null;
  lg ? inlineStyle.push(styles.ld) : null;
  bold ? inlineStyle.push(styles.bold) : null;
  thin ? inlineStyle.push(styles.thin) : null;
  centered ? inlineStyle.push(styles.centered) : null;

  return <Text style={[styles.base, inlineStyle, style]}>{children}</Text>;
};
