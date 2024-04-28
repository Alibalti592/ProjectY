// AvocatTabs.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AvocatProfile from "../../screens/Avocat/AvocatProfile";
import AvocatMessenger from "../../screens/Avocat/AvocatMessenger";
import EditProfileAvocat from "../../screens/Avocat/EditProfileAvocat";

import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={AvocatProfile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfileAvocat"
      component={EditProfileAvocat}
      options={{ title: "تعديل الملف الشخصي" }}
    />
  </Stack.Navigator>
);

const AvocatTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Messenger"
      component={AvocatMessenger}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubbles" color={color} size={size} />
        ),
        tabBarActiveTintColor: "black",
        title: "رسائل",
      }}
    />
    <Tab.Screen
      name="profile"
      component={ProfileStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
        tabBarActiveTintColor: "black",
        headerShown: false,
        title: "الملف",
      }}
    />
  </Tab.Navigator>
);

export default AvocatTabs;
