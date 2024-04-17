import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
//import { avocats } from "../modals/listAvocats";
const avocats = [
  {
    id: 1,
    name: "أحمد حامد",
    specialty: "القانون العام",
    address: "شارع 11 ديسمبر 1960، المبنى 0",
    phoneNumber: "58485001",
    latitude: 37.2785,
    longitude: 9.86,
    userImg: require("../assets/users/user-3.jpg"),
    messageTime: "منذ 4 دقائق",
    messageText:
      "مرحبًا، هذا اختباري لمنشور في تطبيقي الاجتماعي في رياكت نيتيف.",
  },
  {
    id: 2,
    name: "فاطمة علي",
    specialty: "قانون الأسرة",
    address: "شارع النهضة، البناية رقم 5",
    phoneNumber: "57123456",
    latitude: 37.29,
    longitude: 9.871,
    userImg: require("../assets/users/user-1.jpg"),
    messageTime: "منذ ساعتين",
    messageText:
      "مرحبًا، هذا اختباري لمنشور في تطبيقي الاجتماعي في رياكت نيتيف.",
  },
  {
    id: 3,
    name: "محمد عبد الرحمن",
    specialty: "قانون مدني",
    address: "شارع الجمهورية، الطابق الثالث",
    phoneNumber: "59654321",
    latitude: 37.25,
    longitude: 9.8745,
    userImg: require("../assets/users/user-4.jpg"),
    messageTime: "منذ ساعة",
    messageText:
      "مرحبًا، هذا اختباري لمنشور في تطبيقي الاجتماعي في رياكت نيتيف.",
  },
];

const MessagesScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.messageContainer}
      onPress={() => navigation.navigate("Chat", { userName: item.name })}
    >
      <Image source={item.userImg} style={styles.userImg} />
      <View style={styles.messageInfo}>
        <View style={styles.messageHeader}>
          <Text style={styles.userName}>{item.name}</Text>
        </View>
        <Text style={styles.messageText}>{item.messageText}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={avocats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  userImg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  messageInfo: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    paddingBottom: 12,
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  messageTime: {
    fontSize: 12,
    color: "#888888",
  },
  messageText: {
    fontSize: 14,
    color: "#333333",
  },
});
