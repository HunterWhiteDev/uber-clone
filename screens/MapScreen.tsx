import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { setDestination } from "../slices/navSlice";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
//@ts-ignore
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
const MapScreen = () => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ marginTop: 10 }}>
      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        placeholder="Where from?"
        styles={{
          container: {
            flex: 0,
            marginTop: 40,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          dispatch(
            setDestination({
              location: details?.geometry.location,
              description: data.description,
            })
          );
        }}
        fetchDetails={true}
      />

      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
