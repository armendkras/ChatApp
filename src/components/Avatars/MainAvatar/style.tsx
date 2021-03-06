import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Corlors";

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 999,
  },
  active: {
    borderRadius: 999,
    backgroundColor: Colors.GREEN,
    position: "absolute",
    bottom: 0,
    right: 0,
    borderColor: "white",
  },
});
export default styles;
