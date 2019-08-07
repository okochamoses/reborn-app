import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import DashboardScreen from "../screens/Dashboard";
import ServicesScreen from "../screens/Services";
import Header from "../components/header";
import Menu from "../components/menu";

const TabNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        header: props => {
          return <Header menuIcon={true} navigation={props.navigation} />;
        }
      }
    },
    Services: {
      screen: ServicesScreen,
      navigationOptions: {
        header: props => {
          return <Header navigation={props.navigation} />;
        }
      }
    },
    Menu: {
      screen: Menu,
      navigationOptions: {
        header: null,
        title: "Menu"
      }
    }
  },
  {
    order: ["Dashboard", "Services", "Menu"]
  }
);

module.exports = TabNavigator;
