import React, { Component } from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import { connect } from "react-redux";
import Button from "../components/button";
import AddAddress from "../components/addAddress";
import Paragraph from "../components/text";
import Break from "../components/lineBreak";
import Picker from "../components/picker";
import DatePicker from "../components/datePicker";
import RequestHandler from "../api/services";

const { height, width } = Dimensions.get("window");

class ServicePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
    this.service = this.props.navigation.getParam("service", "Failed");
    console.log(this.props);
  }

  async componentDidMount() {}

  render() {
    return (
      <View
        contentContainerStyle={{
          flex: 1,
          backgroundColor: "#E8ECF2",
          flexDirection: "column"
        }}
      >
        <Image
          source={{
            uri: this.service.image
          }}
          style={styles.placeholder}
        />
        <View style={styles.bottomContainer}>
          <View style={{}}>
            {/* <Text style={styles.header}>{this.service.name}</Text> */}
            <Paragraph lg centered bold style={{ fontSize: 22 }}>
              {this.service.name}
            </Paragraph>
            <Break size={0} />
            <Picker name="request" type="" list={this.service.subServices} title="What would you like?" />

            <DatePicker name="time" title="When do you want this?" />

            <Picker
              name="address"
              type="address"
              list={this.props.user.addresses}
              title="Choose address for delivery"
            />
          </View>
          <View>
            <Break size={20} />
            <Paragraph bold centered style={{ fontSize: 35 }}>
              ₦{(this.props.request.price / 100).toLocaleString("en-US", { minimumFractionDigits: 2 }) || "0.00"}
            </Paragraph>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <Button rounded onPress={() => console.log("REDUXX", this.props)} lg dark title="Get Service" />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    // request: state.request
    request: state.request.request,
    time: state.request.time,
    address: state.request.address
  };
};

export default connect(mapStateToProps)(ServicePage);

const styles = StyleSheet.create({
  constainer: {},
  bottomContainer: {
    height: height / 1.25 - 65,
    backgroundColor: "#fff",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: -30,
    paddingTop: 30,
    paddingHorizontal: 30
  },
  header: { fontSize: 22, paddingBottom: 10, fontFamily: "Zirkel Semibold", textAlign: "center" },
  price: { fontSize: 22, paddingBottom: 10, fontFamily: "OpenSans-Light", textAlign: "center" },
  placeholder: { height: height * 0.3, width: width }
});
