import React, { useEffect, useState } from "react";
import {
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import down from "../assets/down.png";

const { width } = Dimensions.get("window");

const PhoneInput = () => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        let areaData = data.map((item) => {
          return {
            code: item.alpha2Code,
            item: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: item.flags.png,
          };
        });

        setAreas(areaData);
        const defaultArea = areaData.find((a) => a.code === "DZ"); // Find Algeria
        if (defaultArea) setSelectedArea(defaultArea);
      });
  }, []);

  const renderAreasCodesModal = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ padding: 10, flexDirection: "row" }}
          onPress={() => {
            setSelectedArea(item);
            setModalVisible(false);
          }}
        >
          <Image
            source={{ uri: item.flag }}
            style={{ height: 20, width: 20, marginRight: 10 }}
          />
          <Text style={{ fontSize: 16, color: "#fff" }}>{item.item}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 400,
                width: width * 0.8,
                backgroundColor: "#000000",
                borderRadius: 12,
              }}
            >
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                verticalScrollIndicator={false}
                style={{ padding: 20, marginBottom: 20 }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: "100%" }}>
        <View style={{ flexDirection: "row", backgroundColor: "#F5F5F5" }}>
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
            onPress={() => setModalVisible(true)}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                source={down}
                style={{ width: 10, height: 10, tintColor: "#111" }}
              />
            </View>

            <View style={{ justifyContent: "center", marginLeft: 5 }}>
              <Image
                source={{ uri: selectedArea?.flag }}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            </View>

            <View style={{ justifyContent: "center", marginLeft: 5 }}>
              <Text style={{ color: "#111", fontSize: 12 }}>
                {selectedArea?.callingCode}
              </Text>
            </View>
          </TouchableOpacity>
          {/* Phone Number Text Input */}
          <TextInput
            style={{
              marginVertical: 10,
              height: 40,
              fontSize: 20,
              color: "#111",
            }}
            placeholder={isFocused ? "" : "رقم الهاتف"} // Only show placeholder if not focused
            placeholderTextColor="#111"
            selectionColor="#111"
            keyboardType="numeric"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
      </View>
      {renderAreasCodesModal()}
    </View>
  );
};

export default PhoneInput;
