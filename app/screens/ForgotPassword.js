import React, { Component } from "react";
import { View, ImageBackground, Image, Text } from "react-native";
import Button from "../components/button";
import Input from "../components/input";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.navigation);
  }
  render() {
    return (
      <ImageBackground source={require("../assets/images/home-bg.png")} style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "column", paddingHorizontal: 24 }}>
          {/* Form Section */}
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Input placeholder="john@example.com" />
            <Button title="RESET PASSWORD" lg primary rounded></Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

module.exports = ForgotPassword;
