import storage from "../utils/asyncStorage";

const authReducerDefaultState = async () => {
  return {
    username: "",
    password: "",
    token: async () => await storage.getData("token"),
    user: null
  };
};

const AuthReducer = (state = authReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_USER":
      return { ...state, user: action.user };
    default:
      return state;
  }
};

module.exports = AuthReducer;
