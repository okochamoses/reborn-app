import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { connect } from "react-redux";

import { showMenu } from "../../actions/app";

const Header = props => {
  console.log("HHHH", props);
  let leftHeader;
  if (props.menuIcon === true) {
    leftHeader = (
      <TouchableOpacity onPress={() => props.dispatch(showMenu)}>
        <Icon name="md-menu" style={styles.icon} />
      </TouchableOpacity>
    );
  } else {
    leftHeader = (
      <TouchableOpacity onPress={() => props.navigation.goBack(null)} style={{ paddingRight: 20 }}>
        <Icon name="ios-arrow-back" style={styles.icon} />
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      {leftHeader}

      <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
        <Icon name="md-notifications-outline" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    menu: state.app.menu
  };
};

export default connect(mapStateToProps)(Header);
