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
      <View className="bg-white  p-2  w-full flex-3 mt-2 ">
        <Text className=" font-Roboto text-xl"> {avocat.avocatName}</Text>
        <Text>{avocat.specialty}</Text>
        <Text>{avocat.address}</Text>
        <Text>{avocat.phone}</Text>
      </View>
      <TouchableOpacity
        className=" m-4 bg-black   w-full  mx-1"
        onPress={() => {
          navigation.navigate("Chat");
        }}
      >
        <Text
          className="text-white  text-center font-Roboto text-xl w-full"
          onPress={sendHandler}
        >
          أرسل رسال{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AvocatDetail;
