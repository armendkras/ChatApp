import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MessageRoomHeader } from "../../components";

const MessageRoom = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <MessageRoomHeader />
      <Text>MessageRoom</Text>
    </SafeAreaView>
  );
};

export default MessageRoom;
