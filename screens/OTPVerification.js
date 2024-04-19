import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Button } from "react-native";
import OTPInput from "../Componants/OTPInput";

const OTPVerification = ({ navigation }) => {
  const handleVerifyOTP = () => {
    navigation.navigate("CreateProfile");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        justifyContent: "center",
      }}
    >
      <StatusBar hidden />
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            marginVertical: 12,
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          أدخل رمز التحقق
        </Text>
        <Text style={{ marginBottom: 10, textAlign: "center" }}>
          نحن نكتشف تلقائياً الرسائل القصيرة المرسلة إلى رقم هاتفك المحمول
        </Text>
      </View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <OTPInput numberOfInputs={6} />
        <TouchableOpacity style={{ marginTop: 50 }}>
          <Text style={{ fontWeight: "bold" }}>
            لم تتلقَ الرمز؟ إعادة إرسال الرمز
          </Text>
        </TouchableOpacity>
      </View>
      <Button color={"black"} title="موافق" onPress={handleVerifyOTP} />
    </View>
  );
};

export default OTPVerification;
