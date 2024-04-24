import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import ActionButton from "../../components/ActionButton";
import CustomButton from "../../components/CustomButton";
import UserInfo from "../../components/UserInfo";

function Profile({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../../assets/Fonts/Roboto-Black.ttf"),
  });
  return (
    <View style={styles.container}>
      <UserInfo username="أحمد حامد" phone="24163133" />
      <CustomButton
        onPress={() => navigation.navigate("Edit Profile")}
        text="تعديل الملف الشخصي"
        style={styles.setupButton}
      />
      <View style={styles.actions}>
        <ActionButton
          iconName="log-out-outline"
          text="تسجيل الخروج"
          style={styles.action}
        />
        <ActionButton
          iconName="trash-outline"
          text="حذف الحساب"
          style={styles.action}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  userInfo: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  personIcon: {
    marginRight: 20,
  },
  detailsContainer: {
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  phone: {
    fontFamily: "Roboto-Black",
    fontSize: 18,
    color: "#666",
    textAlign: "right",
  },
  setupButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  setupButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  actions: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 300,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  actionText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default Profile;
