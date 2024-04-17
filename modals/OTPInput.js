import React, { useRef, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const OTPInput = ({ numberOfInputs = 4 }) => {
  const [otpValues, setOtpValues] = useState(Array(numberOfInputs).fill(""));
  const inputs = useRef([]);

  const focusInput = (index) => {
    if (inputs.current[index]) {
      inputs.current[index].focus();
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === "Backspace" && index > 0 && !otpValues[index]) {
      focusInput(index - 1);
    } else if (
      index < numberOfInputs - 1 &&
      key !== "Backspace" &&
      otpValues[index]
    ) {
      focusInput(index + 1);
    }
  };

  const handleChangeText = (text, index) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = text;
    setOtpValues(newOtpValues);
    if (text && index < numberOfInputs - 1) {
      focusInput(index + 1);
    }
  };

  return (
    <View style={styles.container}>
      {otpValues.map((value, index) => (
        <TextInput
          key={index}
          ref={(input) => (inputs.current[index] = input)}
          style={[styles.input, value ? styles.filledInput : styles.emptyInput]}
          keyboardType="numeric"
          maxLength={1}
          value={value}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(index, key)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    width: 40,
    textAlign: "center",
    marginHorizontal: 5,
  },
  emptyInput: {
    borderColor: "gray",
  },
  filledInput: {
    borderColor: "blue",
  },
});

export default OTPInput;
