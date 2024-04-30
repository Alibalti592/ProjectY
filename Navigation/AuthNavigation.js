// AuthNavigator.js
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "../screens/Login";
import OTPVerification from "../screens/OTPVerification";
import CreateProfile from "../screens/CreateProfile";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const [isSetupProfile, setIsSetupProfile] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const setupProfile = await AsyncStorage.getItem("isProfileSetup");
        setIsSetupProfile(setupProfile);
        console.log("Auth", isSetupProfile);
      } catch (error) {
        console.error("Error checking token:", error);
      }
    };

    checkToken();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, title: "تسجيل الدخول" }}
      />
      <Stack.Screen
        name="OTP Verification"
        component={OTPVerification}
        options={{ title: "التحقق من رمز التحقق" }}
      />
      {isSetupProfile && (
        <Stack.Screen
          name="Create Profile"
          component={CreateProfile}
          options={{ headerShown: false, title: "إنشاء الملف الشخصي" }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
