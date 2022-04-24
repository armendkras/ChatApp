import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Corlors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 36,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  first: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  second: { flexDirection: "row", flex: 1 },
  like: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: Colors.LIGHT_GRAY4,
    padding: 0,
    height: "100%",
    marginHorizontal: 15,
    borderRadius: 18,
    paddingLeft: 15,
    flex: 1,
  },
  icons: {
    marginHorizontal: 10,
  },
});

export default styles;
