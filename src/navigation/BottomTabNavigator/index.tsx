import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { People, Discover, Chats } from "../../screens";
import { StyleSheet, Platform } from "react-native";
import TabButton from "./TabButton";
// import ChatNavigator from "../ChatNavigator/ChatWithBottomBar";
import { MessageIcon, PeopleIcon, DiscoverIcon } from "../../assets/svgs";
import { Colors } from "../../constants/Corlors";
// import { Colors } from "../../constants/colors";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

interface TabNavigatorProps {}

const TabNavigator: FC<TabNavigatorProps> = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Activities"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.container,
        tabBarHideOnKeyboard: Platform.OS == "ios" ? false : true,
      }}
    >
      <Tab.Screen
        options={{
          tabBarButton: (props: any, events: any) => (
            <TabButton
              {...props}
              events={events}
              label={"Chats"}
              Icon={
                <MessageIcon
                  color={
                    props.accessibilityState.selected
                      ? Colors.BLUE
                      : Colors.GRAY
                  }
                />
              }
            />
          ),
        }}
        name="Chats"
        component={Chats}
      />

      <Tab.Screen
        options={{
          tabBarButton: (props: any, events: any) => (
            <TabButton
              {...props}
              events={events}
              label={"People"}
              Icon={
                <PeopleIcon
                  color={
                    props.accessibilityState.selected
                      ? Colors.BLUE
                      : Colors.GRAY
                  }
                />
              }
            />
          ),
        }}
        name="People"
        component={People}
      />
      <Tab.Screen
        options={{
          tabBarButton: (props: any, events: any) => (
            <TabButton
              {...props}
              events={events}
              label={"Discover"}
              Icon={
                <DiscoverIcon
                  color={
                    props.accessibilityState.selected
                      ? Colors.BLUE
                      : Colors.GRAY
                  }
                />
              }
            />
          ),
        }}
        name="Discover"
        component={Discover}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 85,
  },
});
