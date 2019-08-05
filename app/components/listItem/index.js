import React from "react";
import { View, Text, Image } from "react-native";
import colors from "../../utils/colors";

export default ListItem = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomColor: "#E5E5E5",
        borderBottomWidth: 1
      }}
    >
      <Image
        source={{
          uri: props.image
        }}
        style={{ height: 55, width: 55, borderRadius: 8 }}
      />
      <View style={{ flexDirection: "column", paddingLeft: 15 }}>
        <Text
          style={{
            fontSize: 16
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            color: colors.placeholderText
          }}
        >
          {props.description}
        </Text>
      </View>
    </View>
  );
};
