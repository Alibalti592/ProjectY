import React, { useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getAddress } from "../Componants/util/location";
import * as Location from "expo-location";
import { avocats } from "../Componants/listAvocats";
import { Ionicons } from "@expo/vector-icons";
import lawyer from "../assets/lawyer.png";

function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [region, setRegion] = useState({
    latitude: 37.2744,
    longitude: 9.8733,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const callOutHandler = (avocat) => {
    navigation.navigate("Avocat", {
      Avocat: {
        avocatName: avocat.name,
        specialty: avocat.specialty,
        address: avocat.address,
        phone: avocat.phoneNumber,
      },
    });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync({});
        setLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
        const address = await getAddress(
          location.coords.latitude,
          location.coords.longitude
        );
        setAddress(address);
        setRegion((prevRegion) => ({
          ...prevRegion,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }));
      } catch (error) {
        console.error("Error getting location:", error);
        setErrorMsg("Error getting location");
      }
    })();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitude: ${location.lat}, Longitude: ${location.lng}`;
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView initialRegion={region} style={{ flex: 1 }}>
        {avocats.map((avocat) => (
          <Marker
            key={avocat.id}
            coordinate={{
              latitude: avocat.latitude,
              longitude: avocat.longitude,
            }}
            title={avocat.name}
            description={avocat.specialty}
            icon={lawyer}
          >
            <Callout onPress={() => callOutHandler(avocat)}>
              <View>
                <View style={styles.userContainer}>
                  <View style={styles.circle}>
                    <Ionicons name="person" size={30} color="white" />
                  </View>
                  <View>
                    <Text> {avocat.name}</Text>
                    <Text> {avocat.specialty}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>الملف الشخصي</Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
        ))}

        {location && (
          <Marker
            title="your location"
            coordinate={{ latitude: location.lat, longitude: location.lng }}
          />
        )}
      </MapView>
      {address && (
        <View style={styles.addressContainer}>
          <Text style={styles.label}>موقعك الحالي</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  addressContainer: {
    position: "absolute",
    top: 20, // Keep it at the top
    left: 20,
    right: 20, // Add margin to the right
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
  },
  userContainer: {
    flex: 1,
    alignItems: "center",
  },
  circle: {
    width: 43,
    height: 43,
    borderRadius: 75,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto",
  },
});

export default HomeScreen;
