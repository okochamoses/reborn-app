import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Dashboard from "../screens/Dashboard";
import Services from "../screens/Services";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";
import History from "../screens/History";

export default DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: Dashboard,
    Services,
    History,
    Profile,
    Settings
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialIcons;
        let iconName;
        switch (routeName) {
          case "Home":
            iconName = `view-dashboard${focused ? "" : "-outline"}`;
            break;
          case "Services":
            iconName = `book${focused ? "" : "-outline"}`;
            break;
          case "History":
            iconName = `history`;
            break;
          case "Profile":
            iconName = `account${focused ? "" : "-outline"}`;
            break;
          case "Settings":
            iconName = `ios-options`;
            IconComponent = Ionicons;
            break;
          default:
            break;
        }
        // if (routeName === "Home") {
        //   iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        //   // Sometimes we want to add badges to some icons.
        //   // You can check the implementation below.
        //   //   IconComponent = HomeIconWithBadge;
        // } else if (routeName === "Settings") {
        //   iconName = `ios-options`;
        // }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);
