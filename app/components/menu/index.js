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
        <ScrollView style={{ flexGrow: 1, backgroundColor: "#000", marginRight: "20%", borderWidth: 1 }}>
          {/* <TouchableHighlight
            style={{
              alignContent: "center",
              padding: 10,
              borderWidth: 1,
              borderBottomColor: "#232323",
              paddingVertical: 15
            }}
            onPress={() => props.dispatch(hideMenu)}
          > */}
            <View style={{justifyContent: "center", alignItems: "center", height: 250,  flex: 1 }}>
              <Image source={require("../../assets/images/logo.png")}  style={{ width: "60%" }}/>
            </View>
            <MenuItem>Home</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>History</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          {/* </TouchableHighlight> */}
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
