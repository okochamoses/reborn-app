import React, { Component } from "react";
import { Modal, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../components/button";

class AlertModal extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  openModal() {
    this.setState({ open: true });
  }

  closeModal() {
    this.setState({ open: false });
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={{ backgroundColor: "transparent" }}>
        <Modal animationType="slide" transparent={true} visible={this.state.open}>
          <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                width: 300,
                flexDirection: "column",
                backgroundColor: "#ffffff",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingBottom: 20,
                paddingTop: 10
              }}
            >
              <Icon name="md-close-circle" color="red" style={{ fontSize: 60 }}></Icon>
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",
                  textAlign: "center",
                  paddingBottom: 15,
                  paddingTop: 10
                }}
              >
                {this.props.navigation.getParam("message", "coco")}
              </Text>
              <View style={{ width: 200 }}>
                <Button onPress={() => this.closeModal()} title="close" md dark></Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

module.exports = AlertModal;
