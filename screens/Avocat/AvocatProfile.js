import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import UserInfo from "../../components/UserInfo";
import { signOut } from "../../redux/AuthSlice";
import CustomButton from "../../components/CustomButton";
import ActionButton from "../../components/ActionButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { avocats } from "../../components/listAvocats";

function Profile({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await AsyncStorage.removeItem("token");
      dispatch(signOut());
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const handleImageSelection = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* Cover Image */}
      <Image
        source={selectedImage ? { uri: selectedImage } : avocats[1].userImg}
        resizeMode="cover"
        style={styles.coverImage}
      />

      {/* User Info */}
      <View style={styles.userInfoContainer}>
        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={
                selectedImage ? { uri: selectedImage } : avocats[1].userImg
              }
              resizeMode="cover"
              style={styles.profileImage}
            />
            <View style={styles.cameraIconContainer}>
              <Ionicons name="camera" size={24} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>

        {/* User Details */}
        <View style={styles.userInfo}>
          <Text style={styles.username}>أحمد حامد</Text>
          <Text style={styles.phone}>24163133</Text>
        </View>
      </View>

      {/* Setup Profile Button */}
      <CustomButton
        onPress={() => navigation.navigate("EditProfileAvocat")}
        text="تعديل الملف الشخصي"
        style={styles.setupButton}
      />

      {/* Bottom Actions */}
      <View style={styles.bottomActions}>
        <ActionButton
          onPress={handleLogOut}
          iconName="log-out-outline"
          text="تسجيل الخروج"
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
  },
  coverImage: {
    height: 228,
    width: "100%",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  profileImageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  action: {
    borderBottomWidth: 0,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 8,
    borderRadius: 20,
  },
  userInfo: {
    flex: 1,
  },
  phone: {
    fontFamily: "Roboto-Black",
    fontSize: 18,
    color: "#666",
    textAlign: "right",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  specialty: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },

  setupButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    margin: 20,
  },
  setupButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  bottomActions: {
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 10,
    bottom: 8,
    left: 20, // Adjust left position
    right: 20, // Adjust right position
  },

  actionText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default Profile;
