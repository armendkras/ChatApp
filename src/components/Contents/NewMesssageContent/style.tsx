import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Corlors";

const styles = StyleSheet.create({
  text: {
    color: Colors.LIGHT_GRAY3,
    fontSize: 15,
  },
  searchBar: {
    borderRadius: 0,
    marginHorizontal: 0,
  },
  groupChat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginBottom: 20,
  },
});

export default styles;
