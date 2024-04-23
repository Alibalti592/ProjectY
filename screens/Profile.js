import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

function Profile({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../assets/Fonts/Roboto-Black.ttf"),
  });
  return (
    <View style={styles.container}>
      {/* Person Icon and Details */}
      <View style={styles.userInfo}>
        {/* Person Icon */}
        <View style={styles.personIcon}>
          <Ionicons name="person-circle-outline" size={100} color="black" />
        </View>

        {/* Person Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.username}>أحمد حامد</Text>
          <Text style={styles.phone}>24163133</Text>
          {/* Setup Profile Button */}
          <TouchableOpacity
            style={styles.setupButton}
            onPress={() => {
              navigation.navigate("تعديل الملف الشخصي");
            }}
          >
            <Text style={styles.setupButtonText}>تعديل الملف الشخصي</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Actions */}
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
