import { View, Text } from "react-native";
import React, { FC } from "react";
import { MainHeader } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

interface LayoutProps {
  children: any;
  type: "People" | "Chats" | "Discover";
}

const Layout: FC<LayoutProps> = ({ children, type }) => {
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader
        type={type}
        containerStyle={{ marginHorizontal: 15, marginTop: 12 }}
      />
      {children}
    </SafeAreaView>
  );
};

export default Layout;
