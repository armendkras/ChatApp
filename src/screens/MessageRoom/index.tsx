import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MessageRoomContent, MessageRoomHeader } from "../../components";

const MessageRoom = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <MessageRoomHeader />
      <MessageRoomContent />
    </SafeAreaView>
  );
};

export default MessageRoom;
