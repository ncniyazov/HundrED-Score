import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const GroupComponent = memo(() => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={[styles.text, styles.ntcTypo]}>60%</Text>
      <Text style={[styles.keyfiyytFaizi, styles.ntcTypo]}>
        Keyfiyyət faizi:
      </Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.ntc, styles.ntcTypo]}>NƏTİCƏ</Text>
      </View>
      <Text style={[styles.mvffqiyytFaizi, styles.text1Typo]}>
        Müvəffəqiyyət faizi:
      </Text>
      <Text style={[styles.text1, styles.text1Typo]}>60%</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 249,
    position: "absolute",
  },
  ntcTypo: {
    textAlign: "left",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    position: "absolute",
  },
  groupLayout: {
    height: 42,
    width: 125,
    top: 0,
    position: "absolute",
  },
  text1Typo: {
    top: 59,
    textAlign: "left",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    position: "absolute",
  },
  groupChild: {
    top: 20,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro,
    height: 111,
    left: 0,
  },
  text: {
    color: Color.secondary,
    left: 187,
    fontWeight: "700",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    top: 84,
  },
  keyfiyytFaizi: {
    left: 66,
    color: Color.colorBlack,
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    top: 84,
  },
  groupItem: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.foundationPrimaryPrimary400,
    left: 0,
  },
  ntc: {
    top: 9,
    left: 30,
    color: Color.colorWhite,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontWeight: "700",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
  },
  rectangleGroup: {
    left: 62,
  },
  mvffqiyytFaizi: {
    left: 22,
    color: Color.colorBlack,
  },
  text1: {
    color: Color.secondary,
    left: 187,
    fontWeight: "700",
  },
  rectangleParent: {
    top: 453,
    left: 86,
    height: 131,
  },
});

export default GroupComponent;
