import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import AvocatDetail from "./screens/AvocatDetail";
import CreateProfile from "./screens/Avocat/CreateProfile";
import Profile from "./screens/Profile";
import MessagesScreen from "./screens/MessagesScreen";
import LoginScreen from "./screens/Login";
import ChatScreen from "./screens/ChatScreen";
import EditProfile from "./screens/EditProfile";
import AvocatProfile from "./screens/Avocat/AvocatProfile";
import AvocatMessenger from "./screens/Avocat/AvocatMessenger";
import EditProfileAvocat from "./screens/Avocat/EditProfileAvocat";
import OTPVerification from "./screens/OTPVerification";
import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AvocatTabNavigator = createBottomTabNavigator();

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profilee"
      component={AvocatProfile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Stack.Screen name="EditProfileAvocat" component={EditProfileAvocat} />
  </Stack.Navigator>
);
const AvocatTabs = () => (
  <AvocatTabNavigator.Navigator>
    <AvocatTabNavigator.Screen
      name="الملف"
      component={ProfileStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
        tabBarActiveTintColor: "black",
        headerShown: false,
      }}
    />
    <AvocatTabNavigator.Screen
      name=" رسائل"
      component={AvocatMessenger}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubbles" color={color} size={size} />
        ),
        tabBarActiveTintColor: "black",
      }}
    />
  </AvocatTabNavigator.Navigator>
);

const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Homee"
      component={HomeScreen}
      options={{ headerShown: false, tabBarActiveTintColor: "black" }}
    />
    <Stack.Screen name="Avocat" component={AvocatDetail} />
  </Stack.Navigator>
);

const ProfileStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="1الملف"
      component={Profile}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="تعديل الملف الشخصي" component={EditProfile} />
  </Stack.Navigator>
);

const MessagesStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="المراسل" component={MessagesScreen} />
    <Stack.Screen name="الدردشة" component={ChatScreen} />
  </Stack.Navigator>
);

const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="الصفحة الرئيسية"
      component={HomeStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
        headerShown: false,
        tabBarActiveTintColor: "black",
      }}
    />
    <Tab.Screen
      name="الملف"
      component={ProfileStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
        headerShown: false,
        tabBarActiveTintColor: "black",
      }}
    />
    <Tab.Screen
      name="الرسائل"
      component={MessagesStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubbles" color={color} size={size} />
        ),
        headerShown: false,
        tabBarActiveTintColor: "black",
      }}
    />
  </Tab.Navigator>
);

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
            name="تسجيل الدخول"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="شاشات الاستشاري"
            component={MainNavigator}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen name="التحقق من OTP" component={OTPVerification} />
          <Stack.Screen name="إنشاء ملف" component={CreateProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
