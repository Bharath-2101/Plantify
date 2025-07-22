import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

// Reference device dimensions (iPhone 11)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const COLORS = {
  primary: "#84BD8A",
  secondary: "#2A2A2A",
  tertiary: "#6B6B6B",
  white: "#FFFFFF",
  black: "#000000",
};

const SIZES = {
  largeTitle: scale(48),
  h1: scale(30),
  h2: scale(24),
  h3: scale(18),
  h4: scale(14),
  h5: scale(12),
  body1: scale(24),
  body2: scale(16),
  body3: scale(12),
  padding: scale(16),
  margin: scale(16),
  radius: scale(10),
};

const FONTS = {
  largeTitle: {
    fontFamily: "Neuton-Black",
    fontSize: SIZES.largeTitle,
    lineHeight: verticalScale(55),
  },
  h1: {
    fontFamily: "Neuton-Black",
    fontSize: SIZES.h1,
    lineHeight: verticalScale(45),
  },
  h2: {
    fontFamily: "Neuton-Black",
    fontSize: SIZES.h2,
    lineHeight: verticalScale(28),
  },
  h3: {
    fontFamily: "Neuton-Black",
    fontSize: SIZES.h3,
    lineHeight: verticalScale(18),
  },
  h4: {
    fontFamily: "Neuton-Black",
    fontSize: SIZES.h4,
    lineHeight: verticalScale(21),
  },
  h5: {
    fontFamily: "Neuton-Black",
    fontSize: SIZES.h5,
    lineHeight: verticalScale(18),
  },
  body1: {
    fontFamily: "Neuton-Regular",
    fontSize: SIZES.body1,
    lineHeight: verticalScale(30),
  },
  body2: {
    fontFamily: "Neuton-Regular",
    fontSize: SIZES.body2,
    lineHeight: verticalScale(24),
  },
  body3: {
    fontFamily: "Neuton-Regular",
    fontSize: SIZES.body3,
    lineHeight: verticalScale(15),
  },
};

export {
  COLORS,
  SIZES,
  FONTS,
  width,
  height,
  scale,
  verticalScale,
  moderateScale,
};
