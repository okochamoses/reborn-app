import React, { Component } from "react";
import { Modal, Text, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

const Spinner = props => {
  return (
    <Modal animationType="fade" transparent={true} visible={props.spinner}>
      <View style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    </Modal>
  );
};
const mapStateToProps = state => {
  return {
    spinner: state.app.spinner
  };
};
export default connect(mapStateToProps)(Spinner);
