import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const GroupComponent1 = memo(() => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={[styles.text, styles.ntcTypo]}>54</Text>
      <Text style={[styles.text1, styles.text1Typo]}>30</Text>
      <Text style={[styles.ksq40, styles.text1Typo]}>KSQ _ 40%:</Text>
      <Text style={[styles.bsq60, styles.ntcTypo]}>BSQ _ 60%:</Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.ntc, styles.ntcTypo]}>NƏTİCƏ</Text>
      </View>
      <Text style={[styles.yarmillikBal, styles.text2Typo]}>
        Yarımillik bal:
      </Text>
      <Text style={[styles.yarmillikQiymt, styles.text3Typo]}>
        Yarımillik qiymət:
      </Text>
      <Text style={[styles.text2, styles.text2Typo]}>84</Text>
      <Text style={[styles.text3, styles.text3Typo]}>5</Text>
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
  text1Typo: {
    top: 93,
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
  text2Typo: {
    top: 51,
    textAlign: "left",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    position: "absolute",
  },
  text3Typo: {
    top: 73,
    textAlign: "left",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    position: "absolute",
  },
  groupChild: {
    top: 22,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro,
    height: 127,
    left: 0,
  },
  text: {
    color: Color.secondary,
    left: 175,
    fontWeight: "700",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    top: 113,
  },
  text1: {
    color: Color.secondary,
    left: 175,
    fontWeight: "700",
  },
  ksq40: {
    left: 77,
    color: Color.colorBlack,
  },
  bsq60: {
    left: 76,
    color: Color.colorBlack,
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    top: 113,
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
    left: 64,
  },
  yarmillikBal: {
    left: 61,
    color: Color.colorBlack,
  },
  yarmillikQiymt: {
    left: 29,
    color: Color.colorBlack,
  },
  text2: {
    color: Color.secondary,
    left: 175,
    fontWeight: "700",
  },
  text3: {
    color: Color.secondary,
    left: 175,
    fontWeight: "700",
  },
  rectangleParent: {
    top: 407,
    left: 88,
    height: 149,
  },
});

export default GroupComponent1;
