import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTS, IMAGES } from "../constants";

const Onboarding = ({ navigation }) => {
  return (
    <ImageBackground
      source={IMAGES.onboarding}
      style={{
        width: "100%",
        height: "100%",
        resizeMode: "cover",
      }}
    >
      <Text
        style={{
          ...FONTS.largeTitle,
          textAlign: "center",
          color: COLORS.primary,
          position: "absolute",
          top: "10%",
          left: "18%",
        }}
      >
        PLANTIFY
      </Text>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          position: "absolute",
          bottom: "25%",
          gap: "30%",
        }}
      >
        <Text
          style={{
            width: "80%",
            fontWeight: 400,
            textAlign: "center",
            ...FONTS.body1,
          }}
        >
          Best Place for Best Plant Picks.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tabs")}
          style={{
            width: "40%",
            backgroundColor: COLORS.primary,
            padding: 8,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
          }}
        >
          <Text style={{ ...FONTS.h2 }}>START</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
