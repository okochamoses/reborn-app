import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#636363",
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
  }
});

module.exports = styles;
