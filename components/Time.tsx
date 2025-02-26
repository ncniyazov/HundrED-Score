import React, { memo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

export type TimeType = {
  hours?: string;
  minutes?: string;
  showLocation?: boolean;
  locationArrow?: React.ReactNode;

  /** Variant props */
  theme?: string;
};

const Time = memo(
  ({
    theme = "Dark",
    hours = "9",
    minutes = "41",
    showLocation = false,
    locationArrow,
  }: TimeType) => {
    return (
      <View style={[styles.time, styles.timeFlexBox]}>
        <View style={styles.timeFlexBox}>
          <Text style={styles.hours}>{hours}</Text>
          <Text style={styles.hours}>:</Text>
          <Text style={styles.hours}>{minutes}</Text>
        </View>
        <View>{locationArrow && locationArrow}</View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  timeFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  hours: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.sFProDisplayBlackItalic,
    color: Color.colorBlack,
    textAlign: "left",
  },
  time: {
    justifyContent: "center",
    gap: Gap.gap_md,
  },
});

export default Time;
