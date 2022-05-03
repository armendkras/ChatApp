import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Corlors";
const styles = StyleSheet.create({
  container: { height: 200, width: "48%", borderRadius: 10, marginBottom: 10 },
  img: { height: 200, borderRadius: 10 },
  text: {
    color: "white",
    fontSize: 18,
    position: "absolute",
    bottom: 10,
    left: 10,
    maxWidth: "90%",
  },
  avatar: {
    position: "absolute",
    padding: 2,
    borderWidth: 2,
    borderColor: Colors.BLUE,
    top: 10,
    left: 10,
  },
});

export default styles;
