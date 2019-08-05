import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default MenuItem = props => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View
        style={{
          paddingLeft: "5%",
          paddingVertical: 15,
          borderBottomColor: "#2f2f2f",
          borderBottomWidth: 1,
          flexDirection: "row"
        }}
      >
        <Icon name={props.iconName} color="#fff" size={24} style={{ paddingRight: 8 }} />
        <Text style={{ color: "#fff", fontSize: 18 }}>{props.children}</Text>
      </View>
    </TouchableHighlight>
  );
};
