import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "../../components/CustomButton";
const CreateProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelection = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 22 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          {/* Profile Picture */}
          <TouchableOpacity onPress={handleImageSelection}>
            <View style={{ position: "relative" }}>
              <View
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                  overflow: "hidden",
                }}
              >
                {selectedImage ? (
                  <Image
                    source={{ uri: selectedImage }}
                    style={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  <Ionicons
                    name="person-circle-outline"
                    size={120}
                    color="#CCCCCC"
                  />
                )}
              </View>
              <View style={{ position: "absolute", bottom: 0, right: 0 }}>
                <Ionicons name="camera" size={30} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Name input field */}
        <View style={{ marginVertical: 12 }}>
          <Text>الاسم</Text>
          <TextInput
            style={{
              height: 44,
              borderWidth: 1,
              borderRadius: 4,
              marginVertical: 6,
              paddingLeft: 8,
            }}
            placeholder="ادخل اسمك"
            value={name}
            onChangeText={(value) => setName(value)}
          />
        </View>

        {/* Password input field */}
        <View style={{ marginVertical: 12 }}>
          <Text>كلمة السر</Text>
          <TextInput
            style={{
              height: 44,
              borderWidth: 1,
              borderRadius: 4,
              marginVertical: 6,
              paddingLeft: 8,
            }}
            textAlign="right"
            placeholder="ادخل كلمة السر الخاصة بك"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
          />
        </View>

        {/* Specialty input field */}
        <View style={{ marginVertical: 12 }}>
          <Text>التخصص</Text>
          <TextInput
            style={{
              height: 44,
              borderWidth: 1,
              borderRadius: 4,
              marginVertical: 6,
              paddingLeft: 8,
            }}
            placeholder="ادخل تخصصك"
            value={specialty}
            onChangeText={(value) => setSpecialty(value)}
          />
        </View>

        {/* Save button */}
        <TouchableOpacity
          style={{
            height: 44,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("profile")}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
            حفظ التغييرات
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateProfile;
