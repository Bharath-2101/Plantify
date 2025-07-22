import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import { COLORS, ICONS } from "../constants";
import { Dimensions } from "react-native";
import TabBar from "../Components/TabBar";
import Onboarding from "../Screens/Onboarding";
import Favourite from "../Screens/Favourite";
import Cart from "../Screens/Cart";

const { width, height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="User" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
