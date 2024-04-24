import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigator from "./Navigation/UserNav/UserNav";
import AvocatTabs from "./Navigation/AvocatNav/AvocatTabs";
import LoginScreen from "./screens/Login";
import OTPVerification from "./screens/OTPVerification";
import CreateProfile from "./screens/CreateProfile";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/Fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="black" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Create Profile"
            component={CreateProfile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="OTP Verification" component={OTPVerification} />
          {/* Add more screens here if needed */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
