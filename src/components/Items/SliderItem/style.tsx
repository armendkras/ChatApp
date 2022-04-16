import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Corlors";

const styles = StyleSheet.create({
  text: {
    color: Colors.LIGHT_GRAY6,
    marginTop: 7,
    fontSize: 13,
  },
  center: { justifyContent: "center", alignItems: "center" },
  addContainer: {
    width: 52,
    height: 52,
    borderRadius: 999,
    backgroundColor: Colors.LIGHT_GRAY4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
