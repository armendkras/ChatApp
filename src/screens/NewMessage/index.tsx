import { View, Text, Pressable } from "react-native";
import React from "react";
import { NewMessageContent, PrimaryText } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const NewMessage = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Header />
      <NewMessageContent />
    </SafeAreaView>
  );
};

export default NewMessage;

const Header = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginTop: 10,
      }}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <PrimaryText value="Cancel" style={{ fontSize: 17 }} />
      </Pressable>
      <PrimaryText
        value="NewMessage"
        style={{ fontSize: 17, fontWeight: "bold" }}
      />
      <View style={{ width: 50 }} />
    </View>
  );
};
