import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: "#151515",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 50,
    marginTop: Platform.OS == "ios" ? 20 : 0 // only for IOS to give StatusBar Space
  },
  icon: {
    fontSize: 28,
    color: "#FFF"
  }
});
