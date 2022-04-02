import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "../BottomTabNavigator";
import { ChatRoom } from "../../screens";
import ChatWithOutBottomBar from "../ChatNavigator/ChatWithoutBottomBar";

interface MainNavigatorProps {}

const Stack = createStackNavigator();

const MainNavigator: FC<MainNavigatorProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNav" component={BottomTabNavigator} />
      <Stack.Screen
        name="ChatWithOutBottomBar"
        component={ChatWithOutBottomBar}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;