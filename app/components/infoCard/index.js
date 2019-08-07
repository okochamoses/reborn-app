import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Paragraph from "../text";
import styles from "./style";

export default InfoCard = ({ image, info, width, height }) => {
  const radius = 15;
  return (
    <View
      style={{
        height: Dimensions.get("window").height * 0.19,
        width,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          height: "75%",
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
          height: "25%",
          padding: 5
        }}
      >
        <Paragraph sm centered bold white style={{ fontSize: 11.5 }}>
          {info}
        </Paragraph>
      </View>
    </View>
  );
};
