import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigator from "./UserNav/UserNav";
import AvocatTabs from "./AvocatNav/AvocatTabs";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/AuthSlice";

const Stack = createStackNavigator();

const RootNavigator = () => {
  const { role } = useSelector(selectUser);
  console.log("role from root", role);
  return (
    <Stack.Navigator>
      {role == "user" ? (
        <Stack.Screen
          name="UserNavigator"
          component={MainNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="AvocatTabs"
          component={AvocatTabs}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
