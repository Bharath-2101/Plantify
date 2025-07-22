import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, ICONS } from "../constants";
import { height, width } from "../constants/theme";
import data from "../mockdata/Data";

const Cart = () => {
  const [items, setItems] = useState(
    data.filter((plant) => plant.addToCart === true)
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={FONTS.h1}>CART</Text>
        <TouchableOpacity style={styles.backButton}>
          <Image source={ICONS.Arrowleft} style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {items.map((item, index) => (
          <View key={index} style={styles.cardWrapper}>
            <View style={styles.card}>
              <View style={styles.infoContainer}>
                <Text style={[FONTS.h3, styles.centerText]}>{item.title}</Text>
                <Text
                  numberOfLines={3}
                  style={[FONTS.body2, styles.description]}
                >
                  {item.desc}
                </Text>

                <View style={styles.bottomRow}>
                  <View style={styles.priceWrapper}>
                    <Text style={FONTS.h3}>{item.price}</Text>
                  </View>

                  <View style={styles.quantityWrapper}>
                    <TouchableOpacity style={styles.qtyButton}>
                      <Text style={[FONTS.h3, styles.qtyText]}>-</Text>
                    </TouchableOpacity>

                    <Text style={FONTS.h1}>{item.quantity}</Text>

                    <TouchableOpacity style={styles.qtyButton}>
                      <Text style={[FONTS.h3, styles.qtyText]}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.imageContainer}>
                <Image
                  source={item.image}
                  style={styles.plantImage}
                  resizeMode="contain"
                />
                <Image
                  source={ICONS.Favourite}
                  style={[
                    styles.favIcon,
                    {
                      tintColor: item.favourite ? "red" : COLORS.black,
                    },
                  ]}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: height * 0.015,
  },
  backButton: {
    position: "absolute",
    left: width * 0.025,
    top: 2,
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    padding: width * 0.01,
  },
  backIcon: {
    width: width * 0.1,
    height: width * 0.1,
  },
  scrollView: {
    paddingBottom: height * 0.05,
  },
  cardWrapper: {
    width: "100%",
    aspectRatio: 13 / 7,
    paddingHorizontal: width * 0.02,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "98%",
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    borderRadius: width * 0.03,
    overflow: "hidden",
  },
  infoContainer: {
    flex: 1,
    padding: width * 0.03,
    justifyContent: "space-between",
  },
  centerText: {
    textAlign: "center",
  },
  description: {
    marginVertical: height * 0.005,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceWrapper: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityWrapper: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: width * 0.02,
  },
  qtyButton: {
    backgroundColor: COLORS.black,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.012,
    borderRadius: 24,
  },
  qtyText: {
    color: COLORS.white,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  plantImage: {
    width: "90%",
    height: "90%",
  },
  favIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    width: width * 0.08,
    height: width * 0.08,
  },
});
