import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONTS, IMAGES } from "./constants";
import Onboarding from "./Screens/Onboarding";
import * as Font from "expo-font";
import Home from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./navigation/Stacks";

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Neuton-Black": require("./assets/fonts/Neuton-ExtraBold.ttf"),
        "Netuon-Bold": require("./assets/fonts/Neuton-Bold.ttf"),
        "Neuton-Regular": require("./assets/fonts/Neuton-Regular.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: COLORS.white,
      }}
    >
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
