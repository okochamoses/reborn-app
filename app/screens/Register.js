import React, { Component } from "react";
import { View, ImageBackground, Text, ScrollView } from "react-native";
import Button from "../components/button";
import Input from "../components/input";
import color from "../utils/colors";
import request from "../api/services";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "", email: "", phoneNumber: "", username: "", password: "" };
  }

  async handleSubmit() {
    await request.registerCustomer(this.state, true);
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
            <Input
              onChangeText={firstName => {
                this.setState({ firstName });
              }}
              placeholder="First Name"
              validate
            />
            <Input
              onChangeText={lastName => {
                this.setState({ lastName });
              }}
              placeholder="Last Name"
              validate
            />
            <Input
              onChangeText={email => {
                this.setState({ email });
              }}
              type="email-address"
              placeholder="Email"
              validate
            />
            <Input
              onChangeText={phoneNumber => {
                this.setState({ phoneNumber });
              }}
              type="phone-pad"
              placeholder="Phone"
              validate
            />
            <Input
              onChangeText={password => {
                this.setState({ password });
              }}
              placeholder="Password"
              type="password"
            />
            <Input placeholder="Confirm Password" type="password" />
            <Button onPress={() => this.handleSubmit()} title="SIGN UP" lg primary></Button>
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
