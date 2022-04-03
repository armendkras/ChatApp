import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainAvatar } from "../../components";

const Chats = () => {
  return (
    <SafeAreaView>
      <Text>Chats</Text>
      <MainAvatar />
    </SafeAreaView>
  );
};

export default Chats;
