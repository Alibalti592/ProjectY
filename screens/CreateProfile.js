import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { setProfileSetup, setUserToken } from "../redux/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfileForm from "../components/ProfileForm";

const CreateProfile = ({ route }) => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const { token } = route.params;

  const dispatch = useDispatch();
  const handleProfileSetup = async () => {
    dispatch(setProfileSetup());
    try {
      await AsyncStorage.setItem("isProfileSetup", "true");
      dispatch(setUserToken(token));
    } catch (error) {
      console.error("Error storing isProfileSetup:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ProfileForm
          label="الاسم"
          placeholder=" اسمك"
          value={prenom}
          onChangeText={setPrenom}
        />
        <ProfileForm
          label="اللقب"
          placeholder="اللقب"
          value={nom}
          onChangeText={setNom}
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
