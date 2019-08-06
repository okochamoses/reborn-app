import React, { Component } from "react";
import { View, ScrollView, Image, Text } from "react-native";
// import Carousel from 'react-native-snap-carousel';
import PageCarousel from "../components/carousel";
import Button from "../components/button";
import IconTab from "../components/iconTab";
import request from "../api/services";

class Dashboard extends Component {
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
          flexGrow: 1,
          backgroundColor: "#F4F4F4"
          // flexDirection: "column",
          // justifyContent: "space-between"
        }}
        style={{}}
      >
        {/* Form Section */}
        <View>
          <PageCarousel />
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 16, fontFamily: "Montserrat-SemiBold", paddingBottom: 5 }}>Recent Services</Text>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              padding: 10,
              paddingVertical: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3
            }}
          >
            <Text style={{ color: "#A1A1A1", textAlign: "center", fontFamily: "Montserrat-Medium", fontSize: 13 }}>
              You have not previously requested for any service
            </Text>
            <Text style={{ fontWeight: "bold", textAlign: "center", paddingTop: 10 }}>Make Request</Text>
          </View>
        </View>

        <View style={{}}>
          <View style={{ paddingHorizontal: 15, paddingVertical: 40 }}>
            <Button onPress={() => this.props.navigation.navigate("Services")} lg dark title="Request A Service" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

module.exports = Dashboard;
