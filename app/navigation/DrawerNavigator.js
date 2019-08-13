import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";

import { createAppContainer, createDrawerNavigator, DrawerItems } from "react-navigation";
import Dashboard from "./DashboardNavigator";
import DashboardScreen from "../screens/Dashboard";
import ServicesScreen from "../screens/Services";
import ServicePage from "../screens/ServicePage";
import Header from "../components/header";
import Menu from "../components/menu";

const CustomNav = props => {
  return (
    <SafeAreaView>
      <View style={{ height: 150 }}></View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};

const DrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        header: props => {
          return <Header menuIcon={true} navigation={props.navigation} />;
        },
        footer: props => {
          return <Header menuIcon={true} navigation={props.navigation} />;
        }
      }
    },
    Services: ServicesScreen
  },
  {
    contentComponent: CustomNav
  }
);

module.exports = createAppContainer(DrawerNavigator);
