import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CalloutComponent = ({ avocat, onPressProfile }) => {
  return (
    <View>
      <View style={styles.userContainer}>
        <View style={styles.circle}>
          <Ionicons name="person" size={30} color="white" />
        </View>
        <View>
          <Text>{avocat.name}</Text>
          <Text>{avocat.specialty}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPressProfile}>
        <Text style={styles.buttonText}>الملف الشخصي</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 43,
    height: 43,
    borderRadius: 75,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  button: {
    borderRadius: 5,
    backgroundColor: "black",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto",
  },
});

export default CalloutComponent;
