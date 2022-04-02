/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { configureStore } from "./src/store";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

const store = configureStore();
// setupAxios(store);

const MainApp = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);