const ApiReducerDefaultState = {
  requestCount: 0
};

export default ApiReducer = (state = ApiReducerDefaultState, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { ...state, requestCount: state.requestCount + 1 };
    case "REDUCE_COUNT":
      return { ...state, requestCount: state.requestCount - 1 };
    default:
      return state;
  }
};
