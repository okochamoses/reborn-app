exports.setRequest = request => {
  return { type: "SET_REQUEST", request };
};

exports.setTime = time => {
  return { type: "SET_TIME", time };
};

exports.setAddress = address => {
  return { type: "SET_ADDRESS", address };
};

exports.resetRequest = {
  type: "RESET_REQUEST"
};
