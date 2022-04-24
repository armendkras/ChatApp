import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { width: "100%" },
  userMessage: { flexDirection: "row", alignItems: "center" },
  messageItem: {
    marginLeft: 12,
    minHeight: 36,
    justifyContent: "center",
    maxWidth: 220,
    borderRadius: 99,
    padding: 12,
  },
  time: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
});

export default styles;
