import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "../BottomTabNavigator";
import { MessageRoom, NewMessage } from "../../screens";

interface MainNavigatorProps {}

const Stack = createStackNavigator();

const MainNavigator: FC<MainNavigatorProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="NewMessage" component={NewMessage} />
      <Stack.Screen name="MessageRoom" component={MessageRoom} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
