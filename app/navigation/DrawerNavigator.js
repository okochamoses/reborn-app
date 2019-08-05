import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Dashboard from "./DashboardNavigator";

const DrawerNavigator = createDrawerNavigator({
  Home: Dashboard
});

module.exports = DrawerNavigator;
