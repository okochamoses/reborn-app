import axios from "axios";
import store from "../store/configureStore";
import { showSpinner, closeSpinner, showModal, changeCode, changeMessage } from "../actions/app";
import NetInfo from "@react-native-community/netinfo";

class RequestHandler {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "http://reborn-sylvester.herokuapp.com/api",
      timeout: 1000 * 30
    });
  }

  showSpinner() {
    store.dispatch(showSpinner);
  }

  closeSpinner() {
    store.dispatch(closeSpinner);
  }

  showModal() {
    store.dispatch(showModal);
  }

  async getNetworkStatus() {
    const state = await NetInfo.fetch();
    return state.isConnected;
  }

  async makeRequest(type, url, data, displayModal = false) {
    // Check if there is a connection available on the device
    const networkStatus = await this.getNetworkStatus();
    if (!networkStatus) {
      const response = { code: 50, message: "No network connection" };
      if (displayModal) {
        store.dispatch(changeCode(response.code));
        store.dispatch(changeMessage(response.message));
        // get modals
        this.showModal();
      }
      return response;
    }

    // make api call based on type and url
    this.showSpinner();
    const response = await this.getType(type, url, data);
    this.closeSpinner();
    if (displayModal) {
      store.dispatch(changeCode(response.code));
      store.dispatch(changeMessage(response.message));
      // get modals
      this.showModal();
    }

    return response;
  }

  async getType(type, url, data) {
    try {
      switch (type) {
        case "get":
          response = await this.httpClient.get(url);
          return response.data;
        case "post":
          response = await this.httpClient.post(url, { ...data });
          return response.data;
        default:
          break;
      }
    } catch (err) {
      if (err.code === "ECONNABORTED") {
        return { code: 10, message: "Timeout error" };
      }
      if (err.code === "Network Error") {
        return { code: 10, message: "A connection could not be established. Please try again" };
      }
    }
  }

  // API CALLS
  async login(username, password, modal) {
    const response = await this.makeRequest("post", "/customers/authenticate", { username, password }, modal);
    return response;
  }

  async resetPassword(email, modal) {
    const response = await this.makeRequest("post", "/customers/password/reset", { email }, modal);
    return response;
  }

  async registerCustomer(data, modal) {
    const response = await this.makeRequest("post", "/customers", { ...data }, modal);
    return response;
  }
}

export default new RequestHandler();
