import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import LoadingScreen from "../screens/LoadingScreen";
import { checkToken } from "../redux/AuthSlice";
import MainNavigator from "./UserNav/UserNav";
import AuthNavigator from "./AuthNavigation";
import RootNavigator from "./RootNavigation";
import AvocatTabs from "../Navigation/AvocatNav/AvocatTabs";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const getToken = async () => {
      dispatch(checkToken());
    };

    getToken();
  }, [dispatch, token]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token == null ? (
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Root"
            component={RootNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
