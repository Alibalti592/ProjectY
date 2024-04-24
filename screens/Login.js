import React from "react";
import { View } from "react-native";
import UserForm from "./UserForm";
import { useFonts } from "expo-font";
function Login({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../assets/Fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const handlePress = () => {
    navigation.navigate("OTP Verification");
  };

  return (
    <View className="flex flex-col h-full relative">
      <View className="flex h-full">
        <View className="flex-1 bg-black" />
        <View className="flex-1 bg-white" />
      </View>

      <View className="absolute top-1/3 w-full">
        <View className="mx-auto">
          <UserForm onPress={handlePress} />
        </View>
      </View>
    </View>
  );
}

export default Login;
