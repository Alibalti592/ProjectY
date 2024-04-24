import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import { avocats } from "../../components/listAvocats";

function AvocatDetail({ route, navigation }) {
  const [avocat, setAvocat] = useState(null);

  const id = route.params.id;
  const sendHandler = () => {
    console.log("pressed");
    if (avocat) {
      navigation.navigate("MessagesStack", {
        screen: "Chat",
        params: { avocat: avocat.name },
      });
    }
  };

  useEffect(() => {
    const fetchedAvocat = avocats.find((avocat) => avocat.id === id);
    setAvocat(fetchedAvocat);
  }, [id]);

  useEffect(() => {
    if (avocat) {
      navigation.setOptions({
        title: avocat.name,
      });
    }
  }, [navigation, avocat]);

  if (!avocat) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Ionicons name="person" size={80} color="black" />
      </View>
      <View style={styles.details}>
        <Text style={[styles.name, { width: "100%" }]}>{avocat.name}</Text>
        <Text style={[styles.info, { width: "100%" }]}>{avocat.specialty}</Text>
        <Text style={[styles.info, { width: "100%" }]}>{avocat.address}</Text>
        <Text style={[styles.info, { width: "100%" }]}>
          {avocat.phoneNumber}
        </Text>
      </View>

      <CustomButton
        text={"أرسل رسالة"}
        onPress={sendHandler}
        style={styles.button}
      />
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
    color: "white",
    fontSize: 20,
    fontFamily: "Roboto",
  },
});

export default AvocatDetail;
