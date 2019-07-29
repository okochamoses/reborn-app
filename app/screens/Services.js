import React, { Component } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import Button from "../components/button";
import Footer from "../components/footer";
import Input from "../components/input";
import IconTab from "../components/iconTab";
import request from "../api/services";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "dev.mosesokocha@gmail.com" };
  }

  async handleSubmit() {
    await request.resetPassword(this.state.email, true);
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          padding: 15,
          backgroundColor: "#E8ECF2",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
        style={{}}
      ></ScrollView>
    );
  }
}

module.exports = Services;
