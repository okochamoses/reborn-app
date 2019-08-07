import { createStackNavigator, createAppContainer } from "react-navigation";
import AuthNavigator from "./AuthNavigator";
import DashboardNavigator from "./DrawerNavigator";
import TabNavigator from "./TabNavigator";
import AlertModal from "../screens/AlertModal";
import Spinner from "../screens/Spinner";

const MainNavigator = createStackNavigator(
  {
    Dashboard: DashboardNavigator,
    Auth: AuthNavigator
  },
  {
    mode: "modal",
    headerMode: "none",
    transparentCard: true,
    cardStyle: {
      opacity: 1.0
    }
  }
);

exports.MainNavigator;
exports.RootNavigator = createAppContainer(MainNavigator);
