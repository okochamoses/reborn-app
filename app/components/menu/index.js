import React, { Component } from "react";
import { Modal, View, Text, TouchableHighlight, ScrollView } from "react-native";
import { connect } from "react-redux";

import { showMenu, hideMenu } from "../../actions/app";

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
          <TouchableHighlight
            style={{
              alignContent: "center",
              padding: 10,
              borderWidth: 1,
              borderBottomColor: "#232323",
              paddingVertical: 15
            }}
            onPress={() => props.dispatch(hideMenu)}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>HOME</Text>
          </TouchableHighlight>
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
