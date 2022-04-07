import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "../BottomTabNavigator";

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
    </Stack.Navigator>
  );
};

export default MainNavigator;
