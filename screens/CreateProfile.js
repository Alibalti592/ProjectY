import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { setProfileSetup } from "../redux/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfileForm from "../components/ProfileForm";

const CreateProfile = ({ navigation }) => {
  const [prenom, setPrenom] = useState(""); // Changed state variable name to prenom
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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ProfileForm
          label="الاسم"
          placeholder="ادخل اسمك"
          value={prenom} // Changed value and onChangeText props to prenom
          onChangeText={setPrenom}
        />
        <ProfileForm
          label="prenom" // Changed label to prenom
          placeholder="ادخل اسمك الأول"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="حفظ التغييرات" onPress={handleProfileSetup} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 22,
    justifyContent: "center",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
  },
});

export default CreateProfile;
