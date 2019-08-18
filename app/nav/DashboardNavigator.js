import React from "react";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import DashboardTabNavigator from "./DashboardTabNavigator";
import DashboardScreen from "../screens/Dashboard";
import ServicesScreen from "../screens/Services";
import ServicePage from "../screens/ServicePage";
import Header from "../components/header";
import ChangePassword from "../screens/settings/ChangePassword";

const DashboardNavigator = createStackNavigator(
  {
    Dashboard: {
      screen: DashboardTabNavigator,
      navigationOptions: {
        header: props => {
          return <Header menuIcon={true} navigation={props.navigation} />;
        }
      }
    },
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: {
        header: props => {
          return <Header navigation={props.navigation} />;
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
  },
  {
    initialRouteName: "ChangePassword"
  }
);

module.exports = DashboardNavigator;
