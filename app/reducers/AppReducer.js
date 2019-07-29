const AppReducerDefaultState = {
  spinner: false,
  modal: false,
  code: null,
  message: "",
  menu: false
};

export default AppReducer = (state = AppReducerDefaultState, action) => {
  switch (action.type) {
    case "SHOW_SPINNER":
      return { ...state, spinner: true };
    case "CLOSE_SPINNER":
      return { ...state, spinner: false };
    case "SHOW_MODAL":
      return { ...state, modal: true };
    case "HIDE_MODAL":
      return { ...state, modal: false };
    case "CHANGE_CODE":
      return { ...state, code: action.code };
    case "CHANGE_MESSAGE":
      return { ...state, message: action.message };
    case "SHOW_MENU":
      return { ...state, menu: true };
    case "HIDE_MENU":
      return { ...state, menu: false };
    default:
      return state;
  }
};
