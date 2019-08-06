import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {},
  innerContainer: {
    padding: 10,
    paddingVertical: 20
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    paddingBottom: 5,
    letterSpacing: -0.7
  },
  centered: {
    alignItems: "center"
  },
  light: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  }
});
