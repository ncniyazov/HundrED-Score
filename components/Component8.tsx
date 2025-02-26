import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Bxswalletalt from "../assets/bxswalletalt.svg";
import { Border, Color, FontSize, FontFamily, Gap } from "../GlobalStyles";

const Component8 = memo(() => {
  return (
    <View style={styles.component1}>
      <View style={styles.component1Child} />
      <View style={styles.bxswalletAltParent}>
        <Bxswalletalt style={styles.bxswalletAltIcon} width={27} height={27} />
        <Text style={styles.dstkOl}>DƏSTƏK OL</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  component1Child: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.secondary,
    position: "absolute",
  },
  bxswalletAltIcon: {
    overflow: "hidden",
  },
  dstkOl: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.homeMenuTextStyle,
    color: Color.colorWhite,
    textAlign: "left",
  },
  bxswalletAltParent: {
    height: "60%",
    width: "52.96%",
    top: "20%",
    right: "23.8%",
    bottom: "20%",
    left: "23.25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Gap.gap_sm,
    position: "absolute",
  },
  component1: {
    top: 681,
    left: 24,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 382,
    height: 45,
    position: "absolute",
  },
});

export default Component8;
