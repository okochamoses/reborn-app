exports.setToken = token => {
  return { type: "SET_TOKEN", token };
};

exports.setUser = user => {
  return { type: "SET_USER", user };
};
