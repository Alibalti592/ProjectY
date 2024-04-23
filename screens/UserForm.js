import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Image } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import PhoneInput from "../Componants/PhoneInput";
import { useFonts } from "expo-font";

function UserForm({ onPress }) {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../assets/Fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className="form ">
      <View className="flex-col space-y-4 ">
        <View className="m-6">
          <Text className="  text-lg ">تسجيل الدخول باستخدام رقم الهاتف</Text>
          <Text className="   text-sm text-gray-600">
            تسجيل الدخول باستخدام رقم الهاتف الصالح
          </Text>
        </View>
        <View className=" m-3  bg-gray-100">
          <View className="flex-row ">
            <PhoneInput />
          </View>
        </View>
        <Text style={{ textAlign: "right" }} className=" text-gray-500 m-3">
          5xxxxxxxxxxx
        </Text>
        <TouchableOpacity
          style={{ padding: 8, borderRadius: 10 }}
          className=" m-4 bg-black"
          onPress={onPress}
        >
          <Text className="text-white  text-center  text-xl">تسجيل</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default UserForm;
