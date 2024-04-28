import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { setProfileSetup } from "../redux/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfileForm from "../components/ProfileForm";

const CreateProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleProfileSetup = async () => {
    // Dispatch action to set isProfileSetup to true
    dispatch(setProfileSetup());
    try {
      // Store isProfileSetup status in AsyncStorage
      await AsyncStorage.setItem("isProfileSetup", "true");
    } catch (error) {
      console.error("Error storing isProfileSetup:", error);
    }
    navigation.navigate("UserNavigator");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 22 }}
    >
      <View style={{ flexGrow: 1 }}>
        <ProfileForm
          label="الاسم"
          placeholder="ادخل اسمك"
          value={name}
          onChangeText={setName}
        />
        <ProfileForm
          label="كلمة السر"
          placeholder="ادخل كلمة السر الخاصة بك"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="حفظ التغييرات" onPress={handleProfileSetup} />
      </View>
    </SafeAreaView>
  );
};

export default CreateProfile;
