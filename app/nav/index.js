import { createStackNavigator, createAppContainer } from "react-navigation";
import AuthNavigator from "./AuthNavigator";
import DashboardNavigator from "./DrawerNavigation";

const RootNavigator = createStackNavigator(
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

export default createAppContainer(RootNavigator);
