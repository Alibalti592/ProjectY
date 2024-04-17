import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const avocats = [];

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
      {avocats.length === 0 ? (
        <View style={styles.noMessagesContainer}>
          <Text style={styles.noMessagesText}>لا توجد رسائل</Text>
        </View>
      ) : (
        <FlatList
          data={avocats}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      )}
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
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
  noMessagesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  noMessagesText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
