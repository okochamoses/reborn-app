import React, { Component } from "react";
import { View, ImageBackground, Image, Text, TouchableHighlight } from "react-native";
import Button from "../components/button";
import Input from "../components/input";
import { login } from "../api/services";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "moses", password: "Password12" };
  }

  async handleSubmit() {
    const token = await login(this.state.username, this.state.password);

    if (token !== null) {
      // save token to asynstorage
      console.log("token received");
      // log user in to dashboard
      this.props.navigation.navigate("AlertModal");
    }
  }

  render() {
    return (
      <ImageBackground source={require("../assets/images/home-bg.png")} style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "column", paddingHorizontal: 24 }}>
          {/* Image Section */}
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View>
              <Image source={require("../assets/images/logo.png")} resizeMode={"contain"} style={{ width: 300 }} />
            </View>
          </View>

          {/* Form Section */}
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Input
              onChangeText={username => {
                this.setState({ username });
              }}
              value={this.state.username}
              placeholder="john@example.com"
              type="email-address"
            />

            <Input
              onChangeText={password => {
                this.setState({ password });
              }}
              value={this.state.password}
              placeholder="Password"
              type="password"
            />

            <Button onPress={() => this.handleSubmit()} title="SIGN IN"></Button>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 50 }}>
              <Text
                onPress={() => this.props.navigation.navigate("ForgotPassword")}
                style={{ color: "#ffffff", fontFamily: "Montserrat-Regular", fontSize: 10 }}
              >
                FORGOT DETATILS
              </Text>
              <Text
                onPress={() => this.props.navigation.navigate("Register")}
                style={{ color: "#ffffff", fontFamily: "Montserrat-Regular", fontSize: 10 }}
              >
                CREATE ACCOUNT
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

module.exports = Login;
