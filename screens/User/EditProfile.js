import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 22,
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          {/* Back button */}
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Name input field */}
        <View>
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text>الاسم</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                placeholder="أدخل اسمك"
                value={name}
                onChangeText={(value) => setName(value)}
                editable={true}
              />
            </View>
          </View>

          {/* Phone number input field */}
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text>رقم الهاتف</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                placeholder="أدخل رقم هاتفك"
                value={phoneNumber}
                onChangeText={(value) => setPhoneNumber(value)}
                editable={true}
              />
            </View>
          </View>

          {/* Password input field */}
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text>كلمة المرور</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                placeholder="أدخل كلمة المرور الخاصة بك"
                value={password}
                onChangeText={(value) => setPassword(value)}
                editable={true}
                secureTextEntry={true}
                textAlign="right"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Country input field */}
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          ></View>
        </View>

        {/* Save Changes Button */}
        <TouchableOpacity
          style={{
            height: 44,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
            marginTop: 20,
          }}
          onPress={() => console.log("Save Changes pressed")}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
            حفظ التغييرات
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
