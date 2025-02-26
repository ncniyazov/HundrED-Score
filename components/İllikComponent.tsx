import React, { memo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Iwwayear from "../assets/iwwayear.svg";
import { Border, Color, FontSize, FontFamily, CompText } from "../GlobalStyles";

const İllikComponent = memo(() => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.component3}
      onPress={() => navigation.navigate("LlikQiymetlendirme")}
    >
      <View style={[styles.component2Child, styles.llkPosition]} />
      <View style={[styles.llkQymtlndrmParent, styles.llkPosition]}>
        <Text style={[styles.llkQymtlndrm, styles.llkPosition]}>
          İLLİK QİYMƏTLƏNDİRMƏ
        </Text>
        <Iwwayear style={styles.iwwayearIcon} width={16} height={30} />
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  llkPosition: {
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  component2Child: {
    height: "100%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.foundationPrimaryPrimary100,
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: 183,
    top: "0%",
  },
  llkQymtlndrm: {
    top: "46.67%",
    fontSize: FontSize.homeMenuTextStyle_size,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontFamily: FontFamily.homeMenuTextStyle,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    left: CompText.left,
    width: CompText.width,
  },
  iwwayearIcon: {
    top: 0,
    right: "41.53%",
    left: "42.08%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  llkQymtlndrmParent: {
    height: "55.56%",
    top: "14.81%",
    bottom: "29.63%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  component3: {
    top: 383,
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

export default İllikComponent;
