import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../Screens/Onboarding";
import Home from "../Screens/Home";
import Tabs from "./Tabs";
import Details from "../Screens/Details";

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Stacks;

const styles = StyleSheet.create({});
