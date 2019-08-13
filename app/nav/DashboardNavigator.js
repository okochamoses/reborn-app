import React from "react";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import DashboardTabNavigator from "./DashboardTabNavigator";
import DashboardScreen from "../screens/Dashboard";
import ServicesScreen from "../screens/Services";
import ServicePage from "../screens/ServicePage";
import Header from "../components/header";
import Menu from "../components/menu";

const DashboardNavigator = createStackNavigator({
  Dashboard: {
    screen: DashboardTabNavigator,
    navigationOptions: {
      header: props => {
        return <Header menuIcon={true} navigation={props.navigation} />;
      }
    }
  },
  ServicePage: {
    screen: ServicePage,
    navigationOptions: {
      header: props => {
        return <Header navigation={props.navigation} />;
      }
    }
  }
});

const TabNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      header: props => {
        return <Header menuIcon={true} navigation={props.navigation} />;
      },
      footer: props => {
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
});

module.exports = DashboardNavigator;
