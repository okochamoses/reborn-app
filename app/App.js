import { createStackNavigator, createAppContainer } from "react-navigation";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import { RootNavigator } from "./navigation";
import Spinner from "./screens/Spinner";
import AlertModal from "./screens/AlertModal";
import Menu from "./components/menu";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
        <Spinner />
        <AlertModal />
        <Menu />
      </Provider>
    );
  }
}
