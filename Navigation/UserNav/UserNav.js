import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../../screens/HomeScreen";
import AvocatDetail from "../../screens/User/AvocatDetail";
import EditProfile from "../../screens/User/EditProfile";
import Profile from "../../screens/User/Profile";
import MessagesScreen from "../../screens/MessagesScreen";
import ChatScreen from "../../screens/ChatScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false, tabBarActiveTintColor: "black" }}
    />
    <Stack.Screen name="Lawyer" component={AvocatDetail} />
  </Stack.Navigator>
);

const ProfileStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Edit Profile" component={EditProfile} />
  </Stack.Navigator>
);

const MessagesStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="Chat" component={ChatScreen} />
  </Stack.Navigator>
);

const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeStack"
      component={HomeStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
        headerShown: false,
        tabBarActiveTintColor: "black",
        title: "Home",
      }}
    />
    <Tab.Screen
      name="Profile"
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
      name="MessagesStack"
      component={MessagesStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubbles" color={color} size={size} />
        ),
        headerShown: false,
        tabBarActiveTintColor: "black",
        title: "Messages",
      }}
    />
  </Tab.Navigator>
);

export default MainNavigator;
