import { StyleSheet } from "react-native";

export default StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#BEBEBE",
    paddingHorizontal: 0,
    paddingVertical: 10,
    fontFamily: "OpenSans-Regular"
  },
  errorInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#FF2200",
    paddingHorizontal: 0,
    paddingVertical: 10
  },
  errorMessage: {
    color: "#FF2200",
    fontSize: 9,
    textAlign: "right"
  },
  placeholder: {
    color: "#939393",
    fontFamily: "OpenSans-Regular"
  }
});
