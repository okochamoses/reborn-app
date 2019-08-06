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
            <Paragraph bold>Make Request</Paragraph>
          </Card>

          <Break size={30} />

          <Card header="Frequently Used Services" centered style={{paddingHorizontal: 0}}>
            <View style={{flexDirection: "row", flex: 1, justifyContent: "space-between", width: "100%"}}>
              <InfoCard image="https://alansautosrepairs.co.uk/assets/images/servicing.jpg" info="Mobile Mechanic"  height={100} width={"29%"}/>
              <InfoCard image="https://cdn.thenigerianvoice.com/story/XGltYWdlc1xjb250ZW50XHU4cGN0MjFzcjRfbmlnZXJpYW5kaXNoZXMuanBnfDUwMHwzMDB8.jpg" info="Breakfast & Lunch" height={100} width={"29%"}/>
              <InfoCard image="https://cdn.thenigerianvoice.com/story/XGltYWdlc1xjb250ZW50XHU4cGN0MjFzcjRfbmlnZXJpYW5kaXNoZXMuanBnfDUwMHwzMDB8.jpg" info="Car Wash" height={100} width={"29%"}/>
            </View>
          </Card>
          
          <Break size={50} />

          {/* check if last ride was not rated and display rating card */}
          <Card header="Rate Last Vendor" light>
            <Paragraph style={{ paddingBottom: 10 }} light sm>
              How was your last service with us?
            </Paragraph>
            <Rating />
          </Card>

          <View>
            <View style={{ paddingVertical: 40 }}>
              <Button
                onPress={() => this.props.navigation.navigate("Services")}
                lg
                dark
                title="Request A Service"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

module.exports = Dashboard;
