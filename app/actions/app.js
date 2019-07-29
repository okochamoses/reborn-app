exports.showSpinner = {
  type: "SHOW_SPINNER"
};

exports.closeSpinner = {
  type: "CLOSE_SPINNER"
};

exports.showModal = {
  type: "SHOW_MODAL"
};

exports.hideModal = {
  type: "HIDE_MODAL"
};

exports.changeCode = code => {
  return { type: "CHANGE_CODE", code: code };
};

exports.changeMessage = message => {
  return { type: "CHANGE_MESSAGE", message: message };
};

exports.showMenu = { type: "SHOW_MENU" };

exports.hideMenu = { type: "HIDE_MENU" };
