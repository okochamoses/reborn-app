import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./style";

function Button({ rounded, outlined, dark, primary, light, title, md, sm, lg, ...restProps }) {
  let inlineStyle = [styles.button];

  rounded ? inlineStyle.push(styles.rounded) : null;
  outlined ? inlineStyle.push(styles.outlined) : null;
  dark ? inlineStyle.push(styles.dark) : null;
  primary ? inlineStyle.push(styles.primary) : null;
  light ? inlineStyle.push(styles.light) : null;
  md ? inlineStyle.push(styles.md) : null;
  sm ? inlineStyle.push(styles.sm) : null;
  lg ? inlineStyle.push(styles.lg) : null;

  return (
    <TouchableHighlight style={inlineStyle} {...restProps}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

module.exports = Button;
