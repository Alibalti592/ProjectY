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
      name="Profilee"
      component={Profile}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="EditProfile" component={EditProfile} />
  </Stack.Navigator>
);

const MessagesStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Messenger" component={MessagesScreen} />
    <Stack.Screen name="Chat" component={ChatScreen} />
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
            name="AvocatTabs"
            component={MainNavigator}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen name="OTPVerification" component={OTPVerification} />
          <Stack.Screen name="CreateProfile" component={CreateProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
