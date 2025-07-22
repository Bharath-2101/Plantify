import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { COLORS, ICONS } from "../constants";
import { FONTS, height, width } from "../constants/theme";

const Details = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { plant } = route.params;

  return (
    <View style={styles.container}>
      {/* Top Image Section */}
      <ImageBackground
        source={plant.image}
        style={styles.imageBackground}
        resizeMode="contain"
      >
        {/* Header Controls */}
        <View style={styles.headerControls}>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={ICONS.Arrowleft}
              style={styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Image
              source={ICONS.Favourite}
              style={[
                styles.favIcon,
                {
                  tintColor: plant.favourite === true ? "red" : COLORS.black,
                },
              ]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Info Section */}
      <View style={styles.infoContainer}>
        {/* Title + Rating */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>{plant.title}</Text>
          <View style={styles.rating}>
            <Image
              source={ICONS.Star}
              style={styles.starIcon}
              resizeMode="contain"
            />
            <Text style={styles.ratingText}>4.8</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.descriptionBox}>
          <Text
            style={styles.description}
            numberOfLines={5}
            ellipsizeMode="tail"
          >
            {plant.desc}
          </Text>
        </View>

        {/* Price + Add to Cart */}
        <View style={styles.footer}>
          <View style={styles.priceBox}>
            <Text style={FONTS.body2}>Price</Text>
            <Text style={FONTS.h2}>{plant.price}</Text>
          </View>
          <TouchableOpacity style={styles.cartBtn}>
            <Text style={styles.cartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageBackground: {
    flex: 3,
    justifyContent: "space-between",
  },
  headerControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.02,
  },
  iconBtn: {
    width: width * 0.13,
    height: width * 0.13,
    backgroundColor: COLORS.primary,
    borderRadius: width * 0.065,
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    width: width * 0.08,
    height: width * 0.08,
  },
  favIcon: {
    width: width * 0.07,
    height: width * 0.07,
  },
  infoContainer: {
    flex: 2,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
    justifyContent: "space-between",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    ...FONTS.h1,
    maxWidth: "70%",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.01,
  },
  starIcon: {
    tintColor: "gold",
    width: width * 0.06,
    height: width * 0.06,
  },
  ratingText: {
    ...FONTS.h1,
  },
  descriptionBox: {
    paddingVertical: height * 0.01,
  },
  description: {
    ...FONTS.body2,
    lineHeight: height * 0.03,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: height * 0.03,
  },
  priceBox: {
    alignItems: "center",
    flex: 1,
  },
  cartBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1,
    borderRadius: width * 0.1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: width * 0.05,
  },
  cartText: {
    ...FONTS.h2,
    color: COLORS.black,
  },
});
