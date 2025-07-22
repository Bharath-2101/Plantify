import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, ICONS } from "../constants";
import plants from "../mockdata/Data";
import { height, width } from "../constants/theme";

const Favourite = ({ navigation }) => {
  const [favourites, setFavourites] = useState(
    plants.filter((plant) => plant.favourite === true)
  );

  const ITEM_WIDTH = (width - 3 * 8) / 2;
  const ITEM_HEIGHT = ITEM_WIDTH * (14 / 9);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={FONTS.h1}>Favourites</Text>
        <TouchableOpacity style={styles.backButton}>
          <Image source={ICONS.Arrowleft} style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={favourites}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ padding: 8 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.cardContainer,
              { width: ITEM_WIDTH, height: ITEM_HEIGHT },
            ]}
          >
            <View style={styles.imageContainer}>
              <Image source={ICONS.Favourite} style={styles.heartIcon} />
              <Image
                source={item.image}
                style={styles.plantImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={FONTS.h3}>{item.title}</Text>
              <Text numberOfLines={3} ellipsizeMode="tail" style={FONTS.body3}>
                {item.desc}
              </Text>
              <View style={styles.bottomRow}>
                <View style={styles.priceContainer}>
                  <Text style={FONTS.h3}>{item.price}</Text>
                </View>
                <TouchableOpacity
                  style={styles.cartButton}
                  onPress={() =>
                    navigation.navigate("Details", { plant: item })
                  }
                >
                  <Text style={[FONTS.h5, { color: COLORS.white }]}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Favourite;

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
    padding: 5,
  },
  backIcon: {
    width: width * 0.1,
    height: width * 0.1,
  },
  cardContainer: {
    margin: 4,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  heartIcon: {
    width: width * 0.08,
    height: width * 0.08,
    tintColor: "red",
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
  },
  plantImage: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: width * 0.02,
    justifyContent: "space-around",
  },
  bottomRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  priceContainer: {
    flex: 1,
    alignItems: "center",
  },
  cartButton: {
    flex: 2,
    backgroundColor: COLORS.black,
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
