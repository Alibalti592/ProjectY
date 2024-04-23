import React, { useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function AvocatDetail({ route, navigation }) {
  const avocat = route.params.Avocat;
  const sendHandler = () => {
    navigation.navigate("الدردشة", { avocatName: avocat.avocatName });
  };

  useEffect(() => {
    navigation.setOptions({
      title: avocat.avocatName,
    });
  }, [navigation, avocat.avocatName]);

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Ionicons name="person" size={80} color="black" />
      </View>
      <View style={styles.details}>
        <Text style={[styles.name, { width: "100%" }]}>
          {avocat.avocatName}
        </Text>
        <Text style={[styles.info, { width: "100%" }]}>{avocat.specialty}</Text>
        <Text style={[styles.info, { width: "100%" }]}>{avocat.address}</Text>
        <Text style={[styles.info, { width: "100%" }]}>{avocat.phone}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={sendHandler}>
        <Text style={styles.buttonText}>أرسل رسالة</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 50,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
    width: "100%",
    alignItems: "right",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    width: "100%",
  },
  info: {
    marginBottom: 10,
    textAlign: "right",
    width: "100%",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    padding: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Roboto",
  },
});

export default AvocatDetail;
