import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
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
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [specialty, setSpecialty] = useState("");

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
                placeholder="ادخل اسمك"
                value={name}
                onChangeText={(value) => setName(value)}
                editable={true}
              />
            </View>
          </View>

          {/* Phone input field */}
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text>الهاتف</Text>
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
                placeholder="ادخل رقم هاتفك"
                value={phone}
                onChangeText={(value) => setPhone(value)}
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
            <Text>كلمة السر</Text>
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
                placeholder="ادخل كلمة السر الخاصة بك"
                value={password}
                onChangeText={(value) => setPassword(value)}
                editable={true}
                secureTextEntry={true}
                style={{ textAlign: "right" }} // Add this line
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text>التخصص</Text>
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
                placeholder="ادخل تخصصك"
                value={specialty}
                onChangeText={(value) => setSpecialty(value)}
                editable={true}
              />
            </View>
          </View>
        </View>

        <CustomButton text={" حفظ التغييرات"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
