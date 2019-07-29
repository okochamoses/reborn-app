import React, { Component } from "react";
import { View, ImageBackground, Image, Text } from "react-native";
import Button from "../components/button";
import Input from "../components/input";
import request from "../api/services";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "dev.mosesokocha@gmail.com" };
  }

  async handleSubmit() {
    await request.resetPassword(this.state.email, true);
  }

  render() {
    return (
      <ImageBackground source={require("../assets/images/home-bg.png")} style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "column", paddingHorizontal: 24 }}>
          {/* Form Section */}
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Input
              placeholder="john@example.com"
              onChangeText={email => {
                this.setState({ email });
              }}
              value={this.state.email}
            />
            <Button onPress={() => this.handleSubmit()} title="RESET PASSWORD" lg primary rounded></Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

module.exports = ForgotPassword;
