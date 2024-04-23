import React from "react";
import { View } from "react-native";
import UserForm from "./UserForm";

function Login({ navigation }) {
  const handlePress = () => {
    navigation.navigate("التحقق من OTP");
  };

  return (
    <View className="flex flex-col h-full relative">
      <View className="flex h-full">
        <View className="flex-1 bg-black" />
        <View className="flex-1 bg-white" />
      </View>

      <View className="absolute top-1/3 w-full ">
        <View className="mx-auto">
          <UserForm onPress={handlePress} />
        </View>
      </View>
    </View>
  );
}

export default Login;
