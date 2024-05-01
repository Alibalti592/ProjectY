import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import down from "../assets/down.png";
import { SvgXml } from "react-native-svg"; // Import SvgXml from react-native-svg

const { width } = Dimensions.get("window");
const algeriaFlagSvgXml = `
 <svg width="800px" height="800px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#006233" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h14V5H4z"></path><path fill="#EEE" d="M32 5H18v26h14a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></path><path fill="#D20F34" d="M20 24c-3.315 0-6-2.685-6-6c0-3.314 2.685-6 6-6c1.31 0 2.52.425 3.507 1.138A7.332 7.332 0 0 0 18 10.647A7.353 7.353 0 0 0 10.647 18A7.353 7.353 0 0 0 18 25.354c2.195 0 4.16-.967 5.507-2.492A5.963 5.963 0 0 1 20 24z"></path><path fill="#D20F34" d="M25.302 18.23l-2.44.562l-.22 2.493l-1.288-2.146l-2.44.561l1.644-1.888l-1.287-2.147l2.303.98l1.644-1.889l-.22 2.494z"></path></svg>
`;

const PhoneInput = ({ phoneNumber, setPhoneNumber }) => {
  const [selectedArea, setSelectedArea] = useState({
    code: "DZ",
    item: "Algeria",
    callingCode: "+213",
  });
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#F5F5F5",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#D9D9D9",
            width: 80,
            height: 40,
            marginHorizontal: 5,
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "center",
            fontSize: 12,
          }}
          onPress={() => {}}
        >
          <View style={{ justifyContent: "center" }}>
            <Image
              source={down}
              style={{ width: 10, height: 10, tintColor: "#111" }}
            />
          </View>

          <View style={{ justifyContent: "center", marginLeft: 5 }}>
            <SvgXml xml={algeriaFlagSvgXml} width="20" height="20" />
            {/* Render SVG using SvgXml */}
          </View>

          <View style={{ justifyContent: "center", marginLeft: 5 }}>
            <Text style={{ color: "#111", fontSize: 12 }}>
              {selectedArea?.callingCode}
            </Text>
          </View>
        </TouchableOpacity>
        {/* Phone Number Text Input */}
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={{
            flex: 1,
            textAlign: "left",
            paddingHorizontal: 8,
            marginVertical: 10,
            height: 40,
            fontSize: 20,
            color: "#111",
          }}
          placeholder={isFocused ? "" : "رقم الهاتف"}
          placeholderTextColor="#111"
          selectionColor="#111"
          keyboardType="numeric"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};

export default PhoneInput;
