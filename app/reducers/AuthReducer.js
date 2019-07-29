const authReducerDefaultState = {
  username: "",
  password: ""
};

const AuthReducer = (state = authReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

module.exports = AuthReducer;
