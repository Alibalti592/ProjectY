import React from "react";
import { Alert, View } from "react-native";
import UserForm from "./UserForm";
import { useFonts } from "expo-font";
import { useState } from "react";
import { usersAndAvocats } from "../components/util/users"; // Assuming usersAndAvocats array is imported from a separate file
import { setUser } from "../redux/AuthSlice";
import { useDispatch } from "react-redux";
function Login({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState(""); // State to hold the phone number value
  const dispatch = useDispatch();

  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../assets/Fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const handleLogin = () => {
    const user = usersAndAvocats.find((item) => item.password === phoneNumber);
    if (phoneNumber) {
      dispatch(setUser(user));
      console.log("setuser=>", user.role);
      navigation.navigate("OTP Verification", { user: user });
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
