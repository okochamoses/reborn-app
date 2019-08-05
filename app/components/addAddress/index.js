import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default AddAddress = () => {
  return (
    <View>
      <Icon name="plus-circle" color="#EFEFEF" size={22} />
      <Text>Add an address</Text>
    </View>
  );
};
