import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../screens/Login";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import RegisterScreen from "../screens/Register";

const AuthNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Login",
      header: null //this will hide the header
    }
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen,
    navigationOptions: {
      title: "Forgot Password",
      headerStyle: {
        backgroundColor: "#949494"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      title: "Register",
      headerStyle: {
        backgroundColor: "#1b1a1d"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
});

export default AuthNavigator;
