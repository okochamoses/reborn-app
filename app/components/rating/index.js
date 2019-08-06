import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default Rating = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Icon name="star" color="#F4F4F4" size={40} />
      <Icon name="star" color="#F4F4F4" size={40} />
      <Icon name="star" color="#F4F4F4" size={40} />
      <Icon name="star" color="#F4F4F4" size={40} />
      <Icon name="star" color="#F4F4F4" size={40} />
    </View>
  );
};
