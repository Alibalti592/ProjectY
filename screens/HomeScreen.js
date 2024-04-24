import React, { useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { View } from "react-native";
import { getAddress } from "../components/util/location";
import * as Location from "expo-location";
import { avocats } from "../components/listAvocats";
import CalloutComponent from "../components/CalloutComponent";
import AddressComponent from "../components/AddressComponent";
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
    navigation.navigate("Lawyer", {
      id: avocat.id,
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

  return (
    <View className="flex-1">
      <MapView initialRegion={region} className="flex-1">
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
              <CalloutComponent
                avocat={avocat}
                onPressProfile={() => onPressProfile(avocat)}
              />
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
      {address && <AddressComponent address={address} />}
    </View>
  );
}

export default HomeScreen;
