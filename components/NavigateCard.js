import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import { Icon } from "react-native-elements";
import { selectTravelTimeInformation } from "../slices/navSlice";
const NavigateCard = () => {
  const time = useSelector(selectTravelTimeInformation);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      {time ? (
        <View>
          <Text style={toInputBoxStyles.text}>{time.distance.text}</Text>
          <Text style={toInputBoxStyles.text}>{time.duration.text}</Text>
        </View>
      ) : (
        <Text style={tw`text-center py-5 text-xl`}>Good Morning</Text>
      )}

      <NavFavorites />

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex flex-row bg-black w-24 px-4 py-3 justify-between rounded-full`}
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row bg-white w-24 px-4 py-3 justify-between rounded-full`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },

  text: {
    textAlign: "center",
    fontSize: 20,
  },
});
