import React from "react";
import { View, Text } from "react-native";
import { SearchIcon } from "../../assets/svgs";
import { SearchBar } from "../../components";
import Layout from "../../layout";

const Chats = () => {
  return (
    <Layout>
      <SearchBar icon={<SearchIcon color="#8E8E93" />} placeholder="Search" />
    </Layout>
  );
};

export default Chats;
