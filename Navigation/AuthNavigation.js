// AuthNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login";
import OTPVerification from "../screens/OTPVerification";
import CreateProfile from "../screens/CreateProfile";

const Stack = createStackNavigator();

const AuthNavigator = () => {
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
      <Stack.Screen
        name="Create Profile"
        component={CreateProfile}
        options={{ headerShown: false, title: "إنشاء الملف الشخصي" }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
