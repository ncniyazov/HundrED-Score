import React, { memo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Grommeticonsformnext from "../assets/grommeticonsformnext.svg";
import { Border, Color, FontSize, FontFamily, Gap } from "../GlobalStyles";

const Component3 = memo(() => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.SualSayinaGrBal}
      onPress={() => navigation.navigate("YarimillikQiymetlendirme")}
    >
      <View style={[styles.SualSayinaGrBalChild, styles.groupWrapperPosition]} />
      <View style={styles.SualSayinaGrBalInner}>
        <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
          <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
            <View
              style={[styles.bxswalletAltParent, styles.groupWrapperPosition]}
            >
              <View style={styles.bxswalletAlt} />
              <Text style={styles.rl}>İRƏLİ</Text>
            </View>
            <Grommeticonsformnext
              style={styles.grommetIconsformNext}
              width={15}
              height={9}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  groupWrapperPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  SualSayinaGrBalChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.secondary,
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  bxswalletAlt: {
    width: 27,
    height: 27,
    display: "none",
    overflow: "hidden",
  },
  rl: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.homeMenuTextStyle,
    color: Color.colorWhite,
    textAlign: "left",
  },
  bxswalletAltParent: {
    width: "77.5%",
    right: "22.5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Gap.gap_sm,
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  grommetIconsformNext: {
    top: 2,
    left: "85%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0%",
    position: "absolute",
  },
  groupWrapper: {
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  SualSayinaGrBalInner: {
    height: "41.46%",
    width: "40%",
    top: "29.27%",
    right: "30%",
    bottom: "29.27%",
    left: "30%",
    position: "absolute",
  },
  SualSayinaGrBal: {
    top: 508,
    left: 306,
    width: 100,
    height: 41,
    position: "absolute",
  },
});

export default Component3;
