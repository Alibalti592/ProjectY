import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/Store";
import { checkToken } from "./redux/AuthSlice";
import AppNavigator from "./Navigation/AppNavigator";

const AppWrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/Fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="black" />
      <AppNavigator />
    </>
  );
};

export default () => (
  <AppWrapper>
    <App />
  </AppWrapper>
);
