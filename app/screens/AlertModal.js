import React, { Component } from "react";
import { Modal, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";

import Button from "../components/button";
import { hideModal } from "../actions/app";
import colors from "../utils/colors";

const AlertModal = props => {
  const closeModal = () => {
    props.dispatch(hideModal);
    props.modal = false;
  };

  const getIcon = () => {
    let icon = "";
    let color = colors.danger;
    switch (props.code) {
      case 0:
        icon = "md-checkmark-circle-outline";
        color = "green";
        break;
      case 10:
        icon = "md-close-circle";
        break;
      case 30:
        icon = "md-warning";
        break;
      case 50:
        icon = "md-wifi";
        break;
      default:
        icon = "md-close-circle";
        return;
    }
    return <Icon name={icon} color={color} style={styles.icon} />;
  };

  return (
    <Modal animationType="slide" transparent={true} visible={props.modal}>
      <View style={styles.container}>
        <View style={styles.modal}>
          {getIcon()}
          <Text style={styles.text}>{props.message}</Text>
          <View style={{ width: "65%" }}>
            <Button onPress={() => closeModal()} title="close" md dark></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    modal: state.app.modal,
    code: state.app.code,
    message: state.app.message
  };
};

export default connect(mapStateToProps)(AlertModal);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    width: 250,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    borderRadius: 5
  },
  icon: { fontSize: 60 },
  text: {
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    paddingBottom: 15,
    paddingTop: 10,
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: 11
  }
});
