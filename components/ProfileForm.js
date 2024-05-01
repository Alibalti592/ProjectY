import React from "react";
import { View, Text, TextInput } from "react-native";

const ProfileForm = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={{ flexDirection: "column", marginBottom: 6 }}>
      <Text style={{ padding: 8 }}>{label}</Text>
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
          style={{ padding: 8 }}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          editable={true}
          secureTextEntry={secureTextEntry}
          textAlign="right"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default ProfileForm;
