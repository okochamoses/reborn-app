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
          backgroundColor: "#E8ECF2"
          // flexDirection: "column",
          // justifyContent: "space-between"
        }}
        style={{}}
      >
        {/* Form Section */}
        <View>
          <PageCarousel />
        </View>

        <View style={{}}>
          <Text
            style={{
              fontFamily: "Montserrat-Regular",
              fontSize: 11,
              paddingBottom: 8,
              paddingHorizontal: 15,
              color: "#3F3C48",
              textTransform: "uppercase",
              fontWeight: "bold"
            }}
          >
            frequently used services
          </Text>
          <View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <IconTab name="car" text="mobile car wash" />
              <IconTab name="power-socket-uk" text="Electrician" />
              <IconTab name="spray-bottle" text="Cleaning Services" />
              <IconTab name="food" text="Breakfast & Lunch" />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <IconTab name="user" text="Hair Dresser" />
              <IconTab name="phone" text="Barbing salon" />
              <IconTab name="shopping" text="Clothes shopping" />
              <IconTab name="wrench" text="Mechanic" />
            </View>
            {/* <View style={{ backgroundColor: "#fff", marginTop: 16, paddingHorizontal: 15 }}>
              <IconTab name="md-wifi" text="mobile car wash" />
              <IconTab name="md-wifi" text="mobile car wash" />
            </View> */}
          </View>
          <View style={{ paddingHorizontal: 15, paddingTop: 30 }}>
            <Button onPress={() => this.props.navigation.navigate("Services")} lg dark title="Request A Service" />
          </View>
          {/* <Footer /> */}
        </View>
      </ScrollView>
    );
  }
}

module.exports = Dashboard;
