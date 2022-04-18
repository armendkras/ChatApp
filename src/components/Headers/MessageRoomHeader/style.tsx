import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Corlors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },
  first: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  avatar: { marginLeft: 20, marginRight: 10 },
  texts: { height: "100%", justifyContent: "center" },
  text1: { fontSize: 17, color: "black", fontWeight: "bold" },
  text2: {
    fontSize: 13,
    fontWeight: "500",
    color: Colors.LIGHT_GRAY6,
  },
  icons: { flexDirection: "row" },
  phone: { marginRight: 20 },
});

export default styles;
