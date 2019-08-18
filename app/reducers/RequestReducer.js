const RequestReducerDefaultState = {
  request: {
    price: 0.0
  },
  time: null,
  address: null
};

export default RequestReducer = (state = RequestReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_REQUEST":
      return { ...state, request: action.request };
    case "SET_TIME":
      return { ...state, time: action.time };
    case "SET_ADDRESS":
      return { ...state, address: action.address };
    case "RESET_REQUEST":
      return {
        ...state,
        request: {
          price: 0.0
        },
        time: null,
        address: null
      };
    default:
      return state;
  }
};
