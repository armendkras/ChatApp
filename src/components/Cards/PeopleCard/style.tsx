import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  textIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    borderBottomWidth: 1,
    height: "100%",
    borderBottomColor: "rgba(0, 0, 0, 0.12)",
    marginLeft: 12,
  },
  text: { fontSize: 17, fontWeight: "500", color: "black" },
});

export default styles;
