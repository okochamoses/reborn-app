import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import styles from "./style";

export default InfoCard = ({ image, info, width, height }) => {
  const radius = 15;
  return (
    <View
      style={{
        height: Dimensions.get("window").height * 0.12,
        width,
        backgroundColor: "#000",
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          height: "100%",
          width: "100%",
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius
        }}
      />
      <View
        style={{
          borderBottomRightRadius: radius,
          borderBottomLeftRadius: radius,
          backgroundColor: "#272727",
          justifyContent: "center",
          height: "50%"
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "Montserrat-Regular",
            fontSize: 12,
            textAlign: "center",
            padding: 5
          }}
        >
          {info}
        </Text>
      </View>
    </View>
  );
};
