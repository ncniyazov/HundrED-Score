import React, { memo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Tablersquarepercentage1 from "../assets/tablersquarepercentage1.svg";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const KVMF = memo(() => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.Yarimillik}
      onPress={() => navigation.navigate("KeyfiyyetVeMuveffeqiyyet")}
    >
      <View style={[styles.YarimillikChild, styles.YarimillikChildPosition]} />
      <View
        style={[
          styles.tablersquarePercentageParent,
          styles.YarimillikChildPosition,
        ]}
      >
        <Tablersquarepercentage1
          style={styles.tablersquarePercentageIcon}
          width={16}
          height={30}
        />
        <Text style={[styles.keyfyytVMvffqyyt, styles.YarimillikChildPosition]}>
          KEYFİYYƏT VƏ MÜVƏFFƏQİYYƏT FAİZİ
        </Text>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  YarimillikChildPosition: {
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  YarimillikChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.foundationPrimaryPrimary100,
    right: "0%",
    left: "0%",
    width: 183,
  },
  tablersquarePercentageIcon: {
    top: 0,
    right: "41.53%",
    left: "42.08%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  keyfyytVMvffqyyt: {
    top: "36.84%",
    fontSize: FontSize.homeMenuTextStyle_size,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontFamily: FontFamily.homeMenuTextStyle,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    left: "0%",
    width: "100%",
  },
  tablersquarePercentageParent: {
    top: 20,
    height: 95,
    right: "0%",
    left: "0%",
    width: "100%",
  },
  Yarimillik: {
    top: 532,
    left: 212,
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

export default KVMF;
