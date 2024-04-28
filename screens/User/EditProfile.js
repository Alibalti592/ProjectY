import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton";
import ProfileForm from "../../components/ProfileForm";

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSaveChanges = () => {
    // Logic to save changes
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 22,
      }}
    >
      <View>
        <ProfileForm
          label="الاسم"
          value={name}
          onChangeText={(value) => setName(value)}
          placeholder="أدخل اسمك"
        />
        <ProfileForm
          label="رقم الهاتف"
          value={phoneNumber}
          onChangeText={(value) => setPhoneNumber(value)}
          placeholder="أدخل رقم هاتفك"
        />
        <ProfileForm
          label="كلمة المرور"
          value={password}
          onChangeText={(value) => setPassword(value)}
          placeholder="أدخل كلمة المرور الخاصة بك"
          secureTextEntry={true}
        />
      </View>

      {/* Save Changes Button */}
      <CustomButton text={"حفظ التغييرات"} onPress={handleSaveChanges} />
    </SafeAreaView>
  );
};

export default EditProfile;
