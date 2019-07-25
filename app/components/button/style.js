import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#2AC062",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20
  },

  text: {
    fontSize: 12,
    textTransform: "uppercase",
    color: "#FFFFFF",
    fontFamily: "Montserrat-Medium",
    includeFontPadding: true
  },

  dark: {
    backgroundColor: "#252525"
  },
  rounded: {
    borderRadius: 5
  },
  outlined: {
    borderWidth: 1
  },
  primary: {
    backgroundColor: "#636363"
  },
  light: {
    backgroundColor: "#ffffff"
  },
  md: {
    height: 45
  },
  sm: {
    height: 30
  },
  lg: {
    height: 60
  }
});

module.exports = styles;
