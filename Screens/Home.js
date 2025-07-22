import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, ICONS, IMAGES } from "../constants";
import { height, width } from "../constants/theme";
import originalPlants from "../mockdata/Data";

const navlinks = ["ALL", "IN DOOR", "OUT DOOR", "POPULAR"];

const Home = ({ navigation }) => {
  const [select, setSelect] = useState("ALL");

  // ✅ Use local state for mutability
  const [plantsData, setPlantsData] = useState(originalPlants);

  const filteredPlants = useMemo(() => {
    if (select === "ALL") return plantsData;

    const selectedTag = select.replace(" ", "").toUpperCase();

    return plantsData.filter((plant) =>
      plant.type.some((tag) => tag.toUpperCase() === selectedTag)
    );
  }, [select, plantsData]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>PLANTIFY</Text>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={ICONS.Search}
            style={styles.searchIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Message Section */}
      <View style={styles.messageSection}>
        <View style={styles.messageBox}>
          <Text style={styles.messageText}>Best Plants Onboard for U</Text>
          <Image
            source={IMAGES.Rose}
            style={styles.messageImage}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Nav Tabs */}
      <View style={styles.navWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.navScroll}
        >
          {navlinks.map((nav, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelect(nav)}
              style={[
                styles.navBtn,
                {
                  backgroundColor:
                    select === nav ? COLORS.primary : COLORS.white,
                  marginLeft: index === 0 ? width * 0.05 : width * 0.025,
                },
              ]}
            >
              <Text style={styles.navText}>{nav}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Plants */}
      <View style={styles.plantsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.plantScroll}
        >
          {filteredPlants.map((plant, index) => (
            <View key={index} style={styles.plantCard}>
              <Image
                source={plant.image}
                style={styles.plantImage}
                resizeMode="contain"
              />
              <Text style={styles.plantTitle}>{plant.title}</Text>
              <View style={styles.cardActions}>
                <TouchableOpacity
                  style={styles.cartBtn}
                  onPress={() =>
                    navigation.navigate("Details", {
                      plant: plant,
                    })
                  }
                >
                  <Text style={styles.cartText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.favBtn}
                  onPress={() => {
                    const updated = plantsData.map((item) =>
                      item.title === plant.title
                        ? { ...item, favourite: !item.favourite }
                        : item
                    );
                    setPlantsData(updated);
                  }}
                >
                  <Image
                    source={ICONS.Favourite}
                    style={[
                      styles.favIcon,
                      { tintColor: plant.favourite ? "red" : COLORS.white },
                    ]}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    gap: height * 0.01,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: height * 0.02,
  },
  title: {
    ...FONTS.largeTitle,
    color: COLORS.primary,
  },
  searchBtn: {
    backgroundColor: COLORS.primary,
    padding: width * 0.02,
    borderRadius: width * 0.1,
  },
  searchIcon: {
    width: width * 0.08,
    height: width * 0.08,
  },
  messageSection: {
    width: "100%",
    alignItems: "center",
    paddingVertical: height * 0.015,
  },
  messageBox: {
    width: "90%",
    backgroundColor: COLORS.primary,
    borderRadius: width * 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
  },
  messageText: {
    ...FONTS.h2,
    width: "50%",
    textAlign: "center",
  },
  messageImage: {
    height: height * 0.15,
    width: width * 0.17,
  },
  navWrapper: {
    height: height * 0.08,
    width: "100%",
  },
  navScroll: {
    paddingVertical: height * 0.015,
    paddingRight: width * 0.05,
    alignItems: "center",
  },
  navBtn: {
    width: width * 0.25,
    borderRadius: width * 0.1,
    borderWidth: 2,
    borderColor: COLORS.black,
    paddingVertical: height * 0.008,
    alignItems: "center",
  },
  navText: {
    ...FONTS.h5,
    textAlign: "center",
  },
  plantsContainer: {
    flex: 1,
    width: "100%",
    paddingVertical: height * 0.009,
  },
  plantScroll: {
    flexDirection: "row",
    paddingHorizontal: width * 0.05,
    alignItems: "center",
    gap: width * 0.07,
  },
  plantCard: {
    backgroundColor: COLORS.primary,
    alignItems: "center",
    width: width * 0.65,
    paddingVertical: height * 0.02,
    borderRadius: width * 0.05,
    gap: height * 0.01,
  },
  plantImage: {
    height: height * 0.24,
    width: width * 0.35,
  },
  plantTitle: {
    ...FONTS.h2,
  },
  cardActions: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    gap: width * 0.04,
  },
  cartBtn: {
    backgroundColor: COLORS.black,
    flex: 3,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: height * 0.014,
  },
  cartText: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  favBtn: {
    backgroundColor: COLORS.black,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingVertical: height * 0.015,
  },
  favIcon: {
    width: width * 0.06,
    height: width * 0.06,
  },
});
