import React, { Component } from "react";
import { View, ScrollView, Image, Text } from "react-native";
// import Carousel from 'react-native-snap-carousel';
import PageCarousel from "../components/carousel";
import Button from "../components/button";
import Card from "../components/card";
import Break from "../components/lineBreak";
import Paragraph from "../components/text";
import InfoCard from "../components/infoCard";
import Rating from "../components/rating";
import Picker from "../components/picker";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#F4F4F4"
        }}
        style={{}}
      >
        <View>
          <PageCarousel />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Card header="Recent Services" centered light>
            <Paragraph style={{ paddingBottom: 10 }} light sm centered>
              You have not previously requested for any service
            </Paragraph>
            <Paragraph bold onPress={() => this.props.navigation.openDrawer()}>
              Make Request
            </Paragraph>
          </Card>

          <Break size={30} />

          <Card header="Frequently Used Services" centered style={{ paddingTop: 5, paddingHorizontal: 0 }}>
            <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between", width: "100%" }}>
              <InfoCard
                image="https://alansautosrepairs.co.uk/assets/images/servicing.jpg"
                info="Mobile Mechanic"
                width={"30%"}
              />
              <InfoCard
                image="https://cdn.thenigerianvoice.com/story/XGltYWdlc1xjb250ZW50XHU4cGN0MjFzcjRfbmlnZXJpYW5kaXNoZXMuanBnfDUwMHwzMDB8.jpg"
                info="Breakfast & Lunch"
                width={"30%"}
              />
              <InfoCard image="http://serviceme.ng/images/categories/car_wash.jpg" info="Car Wash" width={"30%"} />
            </View>
            <Break size={10} />
            <View style={{ width: "100%" }}>
              <Paragraph
                sm
                bold
                onPress={() => this.props.navigation.navigate("Services")}
                style={{ textAlign: "right" }}
              >
                View All...
              </Paragraph>
            </View>
          </Card>

          {/* check if last ride was not rated and display rating card */}
          <Card header="Rate Last Vendor" light>
            <Paragraph style={{ paddingBottom: 10 }} light sm centered>
              How was your last service with us?
            </Paragraph>
            <Rating />
          </Card>

          <View>
            <View style={{ paddingVertical: 40 }}>
              <Button onPress={() => this.props.navigation.navigate("Services")} lg dark title="Request A Service" />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

module.exports = Dashboard;
