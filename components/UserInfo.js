import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UserInfo = ({ username, phone }) => {
  return (
    <View style={styles.userInfo}>
      {/* Person Icon */}
      <View style={styles.personIcon}>
        <Ionicons name="person-circle-outline" size={100} color="black" />
      </View>

      {/* Person Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
    </View>
  );
};

const styles = {
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
};

export default UserInfo;
