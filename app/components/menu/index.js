import React, { Component } from "react";
import { Modal, View, Text, TouchableHighlight, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";

import { showMenu, hideMenu } from "../../actions/app";
import MenuItem from "./menuItem";
import { NavigationActions } from "react-navigation";

const Menu = props => {
  console.log(props);
  return (
    <Modal transparent={true} visible={props.menu}>
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          flex: 1
        }}
      >
        <ScrollView style={{ flexGrow: 1, backgroundColor: "#1D1D27", marginRight: "20%" }}>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", padding: 20 }}>
            <Icon onPress={() => props.dispatch(hideMenu)} name="close" color="#FFFFFF" size={32} />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "5%",
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.2)",
              borderBottomWidth: 1,
              borderBottomColor: "#2f2f2f"
            }}
          >
            <Image source={require("../../assets/images/logo.png")} resizeMode={"contain"} style={{ width: "60%" }} />
          </View>
          <MenuItem onPress={() => NavigationActions.navigate("Dashboard")} iconName="home">
            Home
          </MenuItem>
          <MenuItem onPress={() => NavigationActions.navigate("Services")} iconName="cogs">
            Services
          </MenuItem>
          <MenuItem onPress={() => NavigationActions.navigate("Dashboard")} iconName="history">
            History
          </MenuItem>
          <MenuItem onPress={() => NavigationActions.navigate({ routeName: "Services" })} iconName="account">
            Profile
          </MenuItem>
          <MenuItem onPress={() => NavigationActions.navigate("Dashboard")} iconName="settings">
            Settings
          </MenuItem>
          <MenuItem onPress={() => NavigationActions.navigate("Dashboard")} iconName="power">
            Logout
          </MenuItem>
        </ScrollView>
      </View>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    menu: state.app.menu
  };
};

export default connect(mapStateToProps)(Menu);
