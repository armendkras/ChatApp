import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { navigationRef } from "../utils/navigations";
import MainNavigator from "./MainNavigator";
interface NaviationProps {}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
