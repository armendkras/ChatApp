import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TabButton: FC = (props: any) => {
  const { accessibilityState, label, onPress, Icon } = props;
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        styles.container,
        // { backgroundColor: focused ? "#F6F7F9" : "white" },
      ]}
    >
      <View style={[styles.icon]}>{Icon}</View>
      <Text style={[styles.label, { fontWeight: focused ? "600" : "400" }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // maxWidth: 75,
  },
  icon: { marginBottom: 5.5, width: 22, height: 22 },
  label: {
    // fontFamily: "Inter-Regular",
    fontSize: 12,
    lineHeight: 12,
  },
});
