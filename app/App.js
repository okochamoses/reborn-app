import { createStackNavigator, createAppContainer } from "react-navigation";
import AuthNavigator from "./navigation/AuthNavigator";
import AlertModal from "./screens/AlertModal";

const MainNavigator = createStackNavigator(
  {
    Auth: AuthNavigator,
    AlertModal: {
      screen: AlertModal
    }
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

const App = createAppContainer(MainNavigator);

export default App;
