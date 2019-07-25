import React, { Component } from "react";
import { View, ImageBackground, Text, ScrollView } from "react-native";
import Button from "../components/button";
import Input from "../components/input";
import color from "../utils/colors";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.navigation);
  }
  render() {
    return (
      <ImageBackground source={require("../assets/images/home-bg.png")} style={{ flex: 1 }}>
        <ScrollView
          style={{
            flex: 1,
            flexDirection: "column",
            paddingHorizontal: 24
            // backgroundColor: color.bgColor
          }}
          contentContainerStyle={{
            flexGrow: 1
          }}
        >
          {/* Form Section */}
          <View style={{ flex: 1, justifyContent: "center", paddingTop: 20 }}>
            <Input placeholder="First Name" validate />
            <Input placeholder="Last Name" validate />
            <Input type="email-address" placeholder="Email" validate />
            <Input type="phone-pad" placeholder="Phone" validate />
            <Input placeholder="Password" type="password"></Input>
            <Input placeholder="Confirm Password" type="password"></Input>
            <Button title="SIGN UP" lg primary></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "#ffffff", alignSelf: "center" }}>Read the following terms and conditions.</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

module.exports = Register;
