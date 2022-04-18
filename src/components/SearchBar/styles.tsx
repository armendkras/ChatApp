import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Corlors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.LIGHT_GRAY4,
    height: 36,
    alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    marginVertical: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
    fontFamily: "Poppins-Regular",
    lineHeight: 22,
    height: "100%",
    padding: 0,
  },
  icon: { height: 20, width: 20 },
});

export default styles;
