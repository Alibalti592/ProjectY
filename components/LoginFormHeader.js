import React from "react";
import { View, Text } from "react-native";

const LoginFormHeader = () => {
  return (
    <View className="m-6">
      <Text className="text-lg">تسجيل الدخول باستخدام رقم الهاتف</Text>
      <Text className="text-sm text-gray-600">
        تسجيل الدخول باستخدام رقم الهاتف الصالح
      </Text>
    </View>
  );
};

export default LoginFormHeader;
