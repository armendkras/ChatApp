import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
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
  },
  icon: { height: 17, width: 17 },
});

export default styles;
