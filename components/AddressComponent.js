import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddressComponent = ({ address }) => {
  return (
    <View style={styles.addressContainer}>
      <Text style={styles.label}>موقعك الحالي</Text>
      <Text style={styles.address}>{address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    position: "absolute",
    top: 20, // Keep it at the top
    left: 20,
    right: 20, // Add margin to the right
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
  },
});

export default AddressComponent;
