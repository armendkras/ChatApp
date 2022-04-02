import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { Crm, Ats, Activities, Notifications } from "../../screens";
import { StyleSheet, Platform } from "react-native";
import TabButton from "./TabButton";
import ChatNavigator from "../ChatNavigator/ChatWithBottomBar";
import {
  CrmIcon,
  AtsIcon,
  ActivitiesIcon,
  ChatIcon,
  BellIcon,
} from "../../assets/svgs";
import { Colors } from "../../constants/colors";

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
              label={"Crm"}
              Icon={
                <CrmIcon
                  color={
                    props.accessibilityState.selected
                      ? Colors.PURPLE
                      : Colors.BLACK
                  }
                />
              }
            />
          ),
        }}
        name="Crm"
        component={Crm}
      />

      <Tab.Screen
        options={{
          tabBarButton: (props: any, events: any) => (
            <TabButton
              {...props}
              events={events}
              label={"Ats"}
              Icon={
                <AtsIcon
                  color={
                    props.accessibilityState.selected
                      ? Colors.PURPLE
                      : Colors.BLACK
                  }
                />
              }
            />
          ),
        }}
        name="Ats"
        component={Ats}
      />
      <Tab.Screen
        options={{
          tabBarButton: (props: any, events: any) => (
            <TabButton
              {...props}
              events={events}
              label={"Activities"}
              Icon={
                <ActivitiesIcon
                  color={
                    props.accessibilityState.selected
                      ? Colors.PURPLE
                      : Colors.BLACK
                  }
                />
              }
            />
          ),
        }}
        name="Activities"
        component={Activities}
      />

      
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 51,
  },
});