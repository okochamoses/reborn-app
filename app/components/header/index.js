import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { connect } from "react-redux";

const Header = props => {
  let leftHeader;
  if (props.menuIcon === true) {
    leftHeader = (
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Icon name="menu" style={styles.icon} />
      </TouchableOpacity>
    );
  } else {
    leftHeader = (
      <TouchableOpacity onPress={() => props.navigation.goBack(null)} style={{ paddingRight: 20 }}>
        <Icon name="chevron-left" style={styles.icon} />
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      {leftHeader}

      <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
        <Icon name="dots-horizontal" style={styles.icon} />
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
