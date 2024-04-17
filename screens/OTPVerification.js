import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Button } from "react-native";
import OTPInput from "../modals/OTPInput";

const OTPVerification = ({ onClose }) => {
  const handleVerifyOTP = () => {
    // Perform OTP verification logic
    // For demo purposes, just close the modal
    onClose();
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
        <Text style={{ marginVertical: 12, fontSize: 18, fontWeight: "bold" }}>
          Enter Verification Code
        </Text>
        <Text style={{ marginBottom: 10 }}>
          We are automatically detecting SMS sent to your mobile phone number
        </Text>
      </View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <OTPInput numberOfInputs={6} />
        <TouchableOpacity style={{ marginTop: 50 }}>
          <Text style={{ fontWeight: "bold" }}>
            Didn't receive the code? Resend Code
          </Text>
        </TouchableOpacity>
      </View>
      <Button title="OK" onPress={handleVerifyOTP} />
    </View>
  );
};

export default OTPVerification;

/* return (
    <SafeAreaView style={{ flex: 1 }}>
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
            style={{ marginVertical: 12, fontSize: 18, fontWeight: "bold" }}
          >
            Enter Verification Code
          </Text>
          <Text style={{ marginBottom: 10 }}>
            We are automatically detecting SMS sent to your mobile phone number
          </Text>
        </View>
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <OTPInput numberOfInputs={6} />
          <TouchableOpacity style={{ marginTop: 50 }}>
            <Text style={{ fontWeight: "bold" }}>
              Didn't receive the code? Resend Code
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          title="OK"
          onPress={() => {
            navigation.navigate("Home", { screen: "Home" });
          }}
        />
      </View>
    </SafeAreaView>
  );
<OtpInput
            numberOfDigits={6}
            onTextChange={(text) => console.log(text)}
            focusColor={"black"}
            focusStickBlinkingDuration={400}
            theme={{
              pinCodeContainerStyle: {
                backgroundColor: "white",
                width: 45,
                height: 45,
                borderRadius: 12,
              },
            }}
          />*/
