import React, { memo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Vector2 from "../assets/vector2.svg";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SualSayinaGrBal = memo(() => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.İllik}
      onPress={() => navigation.navigate("SualSayinaGrBal")}
    >
      <View style={[styles.İllikChild, styles.sualPosition]} />
      <View style={[styles.sualSayinaGrBalParent, styles.sualPosition]}>
        <Text style={[styles.sualSayinaGr, styles.sualPosition]}>
          SUAL SAYINA GÖRƏ BAL
        </Text>
        <Vector2 style={styles.vectorIcon} width={16} height={40} />
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  sualPosition: {
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  İllikChild: {
    height: "100%",
    bottom: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.foundationPrimaryPrimary100,
    right: "0%",
    left: "0%",
    width: 183,
    top: "0%",
  },
  sualSayinaGr: {
    top: "46.67%",
    fontSize: FontSize.homeMenuTextStyle_size,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontFamily: FontFamily.homeMenuTextStyle,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    left: "0%",
    width: "100%",
  },
  vectorIcon: {
    right: "41.53%",
    bottom: "60%",
    left: "42.08%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: "0%",
    position: "absolute",
  },
  sualSayinaGrBalParent: {
    height: "55.56%",
    top: "14.81%",
    bottom: "29.63%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  İllik: {
    top: 532,
    left: 18,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 183,
    height: 135,
    position: "absolute",
  },
});

export default SualSayinaGrBal;
