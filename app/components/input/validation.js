import validator from "validator";
const validate = (text, type) => {
  switch (type) {
    case "email-address":
      if (!text.includes("@")) {
        return { error: true, message: "Please enter a valid email" };
      }
      return { error: false, message: "" };
      break;
    case "phone-pad":
      if (!validator.isMobilePhone(text, "en-ZA")) return { error: true, message: "Please enter a valid phone number" };
      return { error: false, message: null };
    default:
      if (validator.isEmpty(text)) {
        return { error: true, message: "Field cannot be empty" };
      }
      return { error: false, message: "" };
      break;
  }
};

module.exports = validate;
