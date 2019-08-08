import React, { Component } from "react";
import { View, StyleSheet, Image, Text, Dimensions, Picker } from "react-native";
import Button from "../components/button";
import AddAddress from "../components/addAddress";
import Paragraph from "../components/text";
import Break from "../components/lineBreak";
import RequestHandler from "../api/services";
import colors from "../utils/colors";

const { height, width } = Dimensions.get("window");

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
    this.service = this.props.navigation.getParam("service", "Failed");
  }

  async componentDidMount() {}

  render() {
    return (
      <View
        contentContainerStyle={{
          flex: 1,
          backgroundColor: "#E8ECF2",
          flexDirection: "column"
        }}
      >
        <Image
          source={{
            uri: this.service.image
          }}
          style={styles.placeholder}
        />
        <View style={styles.bottomContainer}>
          <View style={{}}>
            {/* <Text style={styles.header}>{this.service.name}</Text> */}
            <Paragraph lg centered bold style={{ fontSize: 22 }}>
              {this.service.name}
            </Paragraph>
            <Break size={20} />
            <Paragraph>Select a service</Paragraph>
            {/* <Picker selectedValue={"java"} style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "#000" }}>
              <Picker.Item label="Moses" value="java1" />
              <Picker.Item label="Okocha" value="java2" />
              <Picker.Item label="Chukwutem" value="ja3va" />
              <Picker.Item label="Oseh" value="java4" />
              <Picker.Item label="Mo" value="java5" />
              {}
            </Picker> */}
            {/* <Text style={styles.price}>₦{(this.service.price / 100).toFixed(2)}</Text> */}
          </View>
          <View>
            <Paragraph bold centered style={{ fontSize: 35 }}>
              ₦2,400.00
            </Paragraph>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Button onPress={() => this.props.navigation.navigate("Services")} lg dark title="Get Service" />
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Services;

const styles = StyleSheet.create({
  constainer: {},
  bottomContainer: {
    height: height / 1.25 - 65,
    backgroundColor: "#fff",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: -30,
    paddingTop: 30,
    paddingHorizontal: 30
  },
  header: { fontSize: 22, paddingBottom: 10, fontFamily: "Zirkel Semibold", textAlign: "center" },
  price: { fontSize: 22, paddingBottom: 10, fontFamily: "OpenSans-Light", textAlign: "center" },
  placeholder: { height: height * 0.3, width: width }
});
