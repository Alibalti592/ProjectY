import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ActionButton = ({ iconName, text, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.action, style]} onPress={onPress}>
      <Ionicons name={iconName} size={30} color="black" />
      <Text style={styles.actionText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = {
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
};

export default ActionButton;
