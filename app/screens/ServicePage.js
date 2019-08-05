import React, { Component } from "react";
import { View, StyleSheet, Image, Text, Dimensions, Picker } from "react-native";
import Button from "../components/button";
import AddAddress from "../components/addAddress";
import ListItem from "../components/listItem";
import RequestHandler from "../api/services";
import colors from "../utils/colors";

const { height, width } = Dimensions.get("window");
9;

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
          <View style={{ borderBottomWidth: 1, borderBottomColor: "#EFEFEF" }}>
            <Text style={styles.header}>{this.service.name}</Text>
            <Text style={styles.price}>₦{(this.service.price / 100).toFixed(2)}</Text>
          </View>
          <AddAddress />
          <Picker selectedValue={"java"} style={{ height: 100, width: 100 }}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <View style={{ paddingVertical: 20 }}>
            <Button onPress={() => this.props.navigation.navigate("Services")} lg dark title="Request A Service" />
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
  placeholder: { height: height / 4, width: width }
});
