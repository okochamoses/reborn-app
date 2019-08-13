import React from "react";
import { SafeAreaView, View, ScrollView, Image } from "react-native";

import { createAppContainer, createDrawerNavigator, DrawerItems } from "react-navigation";
import Dashboard from "./DashboardNavigator";
import Services from "../screens/Services";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import History from "../screens/History";

const CustomNav = props => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1D1D27" }}>
      <View style={{ flexDirection: "row", justifyContent: "flex-end", padding: 20 }}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode={"contain"}
          style={{ width: "90%", height: 150 }}
        />
      </View>
      <ScrollView style={{ backgroundColor: "#1D1D27", flexGrow: 1 }}>
        <DrawerItems inactiveTintColor={"#FFF"} {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};

const DrawerNavigator = createDrawerNavigator(
  {
    Dashboard,
    Services,
    History,
    Profile,
    Settings
  },
  {
    contentComponent: CustomNav
  }
);

module.exports = createAppContainer(DrawerNavigator);
