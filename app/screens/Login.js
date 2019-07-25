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
    const response = await login(this.state.username, this.state.password, this.props.navigation);

    if (response !== null) {
      // save token to asynstorage
      // log user in to dashboard
      console.log(response);
      this.props.navigation.navigate("AlertModal", { message: response.message });
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

            <Button onPress={() => this.handleSubmit()} title="SIGN IN" rounded primary></Button>

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
