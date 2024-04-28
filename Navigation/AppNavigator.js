import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainNavigator from "./UserNav/UserNav";
import AuthNavigator from "./AuthNavigation";
import AvocatTabs from "../Navigation/AvocatNav/AvocatTabs"; // Import AvocatTabs navigator

const Stack = createStackNavigator();
const Root = createStackNavigator();
const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSetupProfile, setIsSetupProfile] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const setupProfile = await AsyncStorage.getItem("isProfileSetup");
        setIsLoggedIn(!!token);
        setIsSetupProfile(!!setupProfile);
      } catch (error) {
        console.error("Error checking token:", error);
      }
    };

    checkToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <>
            <Stack.Screen
              name="Auth"
              component={AuthNavigator}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Auth"
              component={AuthNavigator}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="UserNavigator"
              component={MainNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AvocatTabs"
              component={AvocatTabs}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
