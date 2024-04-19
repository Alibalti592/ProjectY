import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Image } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import PhoneInput from "../Componants/PhoneInput";
function UserForm({ onPress }) {
  return (
    <View className="form ">
      <View className="flex-col space-y-4 ">
        <View className="m-6">
          <Text className="  text-lg">تسجيل الدخول باستخدام رقم الهاتف</Text>
          <Text className="   text-sm text-gray-600">
            تسجيل الدخول باستخدام رقم الهاتف الصالح
          </Text>
        </View>
        <View className=" m-3  bg-gray-100">
          <View className="flex-row ">
            <PhoneInput />
          </View>
        </View>
        <Text className=" text-gray-500 m-3">5xxxxxxxxxxx</Text>
        <TouchableOpacity className=" m-4 bg-black" onPress={onPress}>
          <Text className="text-white  text-center  text-xl">تسجيل</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default UserForm;
NativeWindStyleSheet.create({
  styles: {
    form: {
      borderRadius: 15,
      elevation: 6,
      backgroundColor: "#EEE",
      height: 358,
      width: 342,
    },
  },
});
