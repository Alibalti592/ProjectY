import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import OTPInput from "../components/OTPInput";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/AuthSlice";
import { useSelector } from "react-redux";

import CustomButton from "../components/CustomButton";

const OTPVerification = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const isSetupProfile = useSelector((state) => state.auth.isProfileSetup);
  const { role } = route.params;
  console.log(role);
  console.log(isSetupProfile);

  const handleVerifyOTP = async () => {
    const token = Math.random().toString(36).substr(2);

    try {
      await AsyncStorage.setItem("token", token);

      dispatch(loginSuccess({ token: token }));
      if (!isSetupProfile) {
        navigation.navigate("Auth", { screen: "Create Profile" });
      } else {
        if (role === "user") {
          navigation.navigate("UserNavigator"); // Navigate to user navigator
        } else if (role === "avocat") {
          navigation.navigate("AvocatTabs"); // Navigate to avocat navigator
        }
      }
    } catch (error) {
      console.error("Error storing token:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : ""}
        style={styles.keyboardAvoidingContainer}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>تحقق من رقم الهاتف</Text>
          <Text style={styles.subtitle}>
            أدخل رمزًا مكونًا من 4 أرقام تلقيته على هاتفك
          </Text>
          <Text style={styles.phoneNumber}>+ 300***********32</Text>

          <OTPInput numberOfInputs={4} />

          <CustomButton
            onPress={handleVerifyOTP}
            text={"تأكيد"}
            style={[styles.confirmButton, { width: 300 }]}
          />

          <View style={styles.editPhoneNumberContainer}>
            <Text style={styles.editPhoneNumberText}>رقم الهاتف خاطئ؟ </Text>
            <TouchableOpacity
              onPress={() => console.log("الانتقال إلى شاشة إدخال رقم الهاتف")}
            >
              <Text style={styles.editButtonText}>تعديل</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    color: "#111",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 15,
    color: "#111",
    textAlign: "center",
    marginBottom: 20,
  },
  phoneNumber: {
    fontSize: 15,
    color: "#111",
    marginBottom: 20,
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  editPhoneNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  editPhoneNumberText: {
    fontSize: 15,
    color: "#342342",
  },
  editButtonText: {
    fontSize: 15,
    color: "#342342",
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default OTPVerification;
