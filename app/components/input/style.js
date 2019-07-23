import { StyleSheet } from "react-native";
import color from "../../utils/colors";

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  input: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "Montserrat-Medium",
    borderRadius: 5,
    backgroundColor: color.darkInput,
    paddingLeft: 30,
    height: 50,
    flex: 1
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: color.darkInput,
    borderRadius: 5,
    height: 50
  },
  inputSection: {
    marginBottom: 20
  },
  error: {
    color: "red"
  },
  text: {
    color: "#ffffff",
    fontSize: 10
  },
  togglePassword: {
    backgroundColor: "#343441",
    height: 20,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3
  }
});

module.exports = styles;
