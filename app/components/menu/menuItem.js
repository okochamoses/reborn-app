import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default MenuItem = props => {
  return (
    <View
      style={{
        paddingLeft: "10%",
        paddingVertical: 15,
        borderBottomColor: "#2f2f2f",
        borderBottomWidth: 1,
        flexDirection: "row"
      }}
    >
      <Icon
        name="md-wifi"
        color="#fff"
        size={16}
        style={{ height: 15}}
      />
      <Text style={{ color: "#fff", fontSize: 16 }}>{props.children}</Text>
    </View>
  );
};
