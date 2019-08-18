import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import AppReducer from "./AppReducer";
import RequestReducer from "./RequestReducer";

export default combineReducers({
  auth: AuthReducer,
  app: AppReducer,
  request: RequestReducer
});
