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
    latitude: 36.7372,
    longitude: 3.0877,
    latitudeDelta: 0.009, // Zoom level
    longitudeDelta: 0.009, // Zoom level
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
        // Simulate user location in Algeria
        const userLocation = {
          coords: {
            latitude: 36.7372,
            longitude: 3.0877,
          },
        };

        setLocation({
          lat: userLocation.coords.latitude,
          lng: userLocation.coords.longitude,
        });

        const address = await getAddress(
          userLocation.coords.latitude,
          userLocation.coords.longitude
        );
        setAddress(address);
      } catch (error) {
        console.error("Error getting location:", error);
        setErrorMsg("Error getting location");
      }
    })();
  }, []);

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
              <CalloutComponent
                avocat={avocat}
                onPressProfile={() => onPressProfile(avocat)}
              />
            </Callout>
          </Marker>
        ))}

        {location && (
          <Marker
            title="Your Location"
            description="You are here"
            coordinate={{
              latitude: location.lat,
              longitude: location.lng,
            }}
            pinColor="blue"
          />
        )}
      </MapView>
      {address && <AddressComponent address={address} />}
    </View>
  );
}

export default HomeScreen;
/*





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
    latitude: 37.4220936,
    longitude: -122.083922,
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
        console.log(location);
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
            pinColor="Blue"
          />
        )}
      </MapView>
      {address && <AddressComponent address={address} />}
    </View>
  );
}

export default HomeScreen;
*/
