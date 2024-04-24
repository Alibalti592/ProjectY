import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import PhoneInput from "../components/PhoneInput";
import CustomButton from "../components/CustomButton";
import LoginFormHeader from "../components/LoginFormHeader";
function UserForm({ onPress }) {
  return (
    <View style={styles.form}>
      <View className="flex-col space-y-4 ">
        <LoginFormHeader />
        <View className=" m-3  bg-gray-100">
          <View className="flex-row ">
            <PhoneInput />
          </View>
        </View>
        <Text className=" text-gray-500 m-3">5xxxxxxxxxxx</Text>
        <CustomButton
          text={"تسجيل"}
          onPress={onPress}
          style={styles.setupButton}
        />
      </View>
    </View>
  );
}

export default UserForm;
const styles = StyleSheet.create({
  form: {
    borderRadius: 15,
    elevation: 6,
    backgroundColor: "#EEE",
    height: 358,
    width: 342,
  },
  setupButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
});
