import React from "react";
import { Alert, View } from "react-native";
import UserForm from "./UserForm";
import { useFonts } from "expo-font";
import { useState } from "react";
import { usersAndAvocats } from "../components/util/users"; // Assuming usersAndAvocats array is imported from a separate file
function Login({ navigation }) {
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // State to hold the phone number value

  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../assets/Fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const handleLogin = () => {
    console.log(phoneNumber);
    const user = usersAndAvocats.find((item) => item.password === phoneNumber); // Find user or avocat based on the entered password
    if (phoneNumber) {
      navigation.navigate("OTP Verification", { role: user?.role }); // Navigate to OTP verification with role information
    } else {
      Alert.alert("please write your phone number");
    }
  };

  return (
    <View className="flex flex-col h-full relative">
      <View className="flex h-full">
        <View className="flex-1 bg-black" />
        <View className="flex-1 bg-white" />
      </View>

      <View className="absolute top-1/3 w-full">
        <View className="mx-auto">
          <UserForm
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            onPress={handleLogin}
          />
        </View>
      </View>
    </View>
  );
}

export default Login;
