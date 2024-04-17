import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { avocats } from "../../modals/listAvocats";

function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Cover Image */}
      <Image
        source={avocats[1].userImg}
        resizeMode="cover"
        style={styles.coverImage}
      />

      {/* User Info */}
      <View style={styles.userInfoContainer}>
        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <Image
            source={avocats[1].userImg}
            resizeMode="cover"
            style={styles.profileImage}
          />
        </View>

        {/* User Details */}
        <View style={styles.userInfo}>
          <Text style={styles.username}>أحمد حامد</Text>
          <Text style={styles.specialty}>القانون العام</Text>
        </View>
      </View>

      {/* Setup Profile Button */}
      <TouchableOpacity
        style={styles.setupButton}
        onPress={() => {
          navigation.navigate("EditProfileAvocat");
        }}
      >
        <Text style={styles.setupButtonText}>إعداد الملف الشخصي</Text>
      </TouchableOpacity>

      {/* Bottom Actions */}
      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.action}>
          <Ionicons name="log-out-outline" size={30} color="black" />
          <Text style={styles.actionText}>تسجيل الخروج</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Ionicons name="trash-outline" size={30} color="black" />
          <Text style={styles.actionText}>حذف الحساب</Text>
        </TouchableOpacity>
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
  userInfo: {
    flex: 1,
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
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  actionText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default Profile;
