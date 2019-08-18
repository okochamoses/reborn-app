import NavigationService from "./utils/NavigationService";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import DrawerNavigator from "./nav/index";
import Spinner from "./screens/Spinner";
import AlertModal from "./screens/AlertModal";
import Menu from "./components/menu";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DrawerNavigator />
        <Spinner />
        <AlertModal />
        <Menu />
      </Provider>
    );
  }
}
