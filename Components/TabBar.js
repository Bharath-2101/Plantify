import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { COLORS, ICONS } from "../constants";

const { width, height } = Dimensions.get("window");

export default function TabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;

          const isFocused = state.index === index;

          const handlePress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const handleLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={handlePress}
              onLongPress={handleLongPress}
              activeOpacity={0.7}
              style={styles.tabItem}
            >
              <View
                style={[
                  styles.iconWrapper,
                  {
                    backgroundColor: isFocused ? COLORS.black : COLORS.primary,
                  },
                ]}
              >
                <Image
                  source={ICONS[route.name]}
                  resizeMode="contain"
                  style={[
                    styles.icon,
                    {
                      tintColor: isFocused ? COLORS.white : COLORS.black,
                    },
                  ]}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: height * 0.015,
    backgroundColor: COLORS.white,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    width: width * 0.9,
    borderRadius: width * 0.1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: height * 0.018,
    elevation: 5,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    padding: width * 0.025,
    borderRadius: width * 0.1,
  },
  icon: {
    width: width * 0.07,
    height: width * 0.07,
  },
});
