import { createStore } from "redux";
import Reducers from "../reducers";

const configureStore = () => {
  const store = createStore(Reducers);
  return store;
};

export default configureStore();
