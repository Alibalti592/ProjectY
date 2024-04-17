import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Text style={styles.username}>Ali</Text>
          <Text style={styles.phone}>24163133</Text>
        </View>
        <TouchableOpacity
          style={styles.setupButton}
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        >
          <Text style={styles.setupButtonText}>إعداد الملف الشخصي</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.actions}>
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
    padding: 20,
    justifyContent: "space-between", // Ensure space between elements
  },
  userInfo: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  phone: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  setupButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  setupButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  bottomActions: {
    backgroundColor: "#fff",
    borderRadius: 10,
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
