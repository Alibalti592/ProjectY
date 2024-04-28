import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import ActionButton from "../../components/ActionButton";
import CustomButton from "../../components/CustomButton";
import UserInfo from "../../components/UserInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/AuthSlice";
import { logout } from "../../redux/AuthSlice";

function Profile({ navigation }) {
  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../../assets/Fonts/Roboto-Black.ttf"),
  });
  const handleDelete = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("isProfileSetup");

      dispatch(deleteUser());
      navigation.navigate("Auth", { screen: "Login" });
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const handleLogOut = async () => {
    try {
      await AsyncStorage.removeItem("token");
      dispatch(logout());
      navigation.navigate("Auth", { screen: "Login" });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
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
          onPress={handleLogOut}
          iconName="log-out-outline"
          text="تسجيل الخروج"
        />
        <ActionButton
          onPress={handleDelete}
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
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 10,
    bottom: 8,
    left: 20, // Adjust left position
    right: 20, // Adjust right position
  },
  action: {
    borderBottomWidth: 0,
  },
  actionText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default Profile;
