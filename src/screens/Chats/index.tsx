import React from "react";
import { View, Text } from "react-native";
import { ChatsContent, Slider, UsersCard } from "../../components";
import Layout from "../../layout";

const Chats = () => {
  return (
    <Layout type="Chats">
      <ChatsContent />
    </Layout>
  );
};

export default Chats;
