import React, { Component } from "react";
import { Modal, View, Text, TouchableHighlight, ScrollView, Image } from "react-native";
import { connect } from "react-redux";

import { showMenu, hideMenu } from "../../actions/app";
import MenuItem from "./menuItem";

const Menu = props => {
  console.log(props);
  return (
    <Modal transparent={true} visible={props.menu}>
      <TouchableHighlight
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          flex: 1
        }}
        onPress={() => props.dispatch(hideMenu)}
      >
        <ScrollView style={{ flexGrow: 1, backgroundColor: "#1D1D27", marginRight: "20%" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 200,
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.2)",
              borderBottomWidth: 1,
              borderBottomColor: "#2f2f2f"
            }}
          >
            <Image source={require("../../assets/images/logo.png")} resizeMode={"contain"} style={{ width: "60%" }} />
          </View>
          <MenuItem iconName="home">Home</MenuItem>
          <MenuItem iconName="cogs">Services</MenuItem>
          <MenuItem iconName="history">History</MenuItem>
          <MenuItem iconName="account">Profile</MenuItem>
          <MenuItem iconName="settings">Settings</MenuItem>
          <MenuItem iconName="power">Logout</MenuItem>
        </ScrollView>
      </TouchableHighlight>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    menu: state.app.menu
  };
};

export default connect(mapStateToProps)(Menu);
