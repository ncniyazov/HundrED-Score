import React, { memo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Fluentmdl2calendaryear1 from "../assets/fluentmdl2calendaryear1.svg";
import { Border, Color, FontSize, FontFamily, CompText } from "../GlobalStyles";

const Yarimillik = memo(() => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.component2}
      onPress={() => navigation.navigate("YarimillikQiymetlendirme1")}
    >
      <View style={[styles.component2Child, styles.yarimllkPosition]} />
      <View style={[styles.groupParent, styles.yarimllkPosition]}>
        <View
          style={[styles.yarimllkQymtlndrmWrapper, styles.yarimllkPosition]}
        >
          <Text style={[styles.yarimllkQymtlndrm, styles.yarimllkPosition]}>
            YARIMİLLİK QİYMƏTLƏNDİRMƏ
          </Text>
        </View>
        <Fluentmdl2calendaryear1
          style={styles.fluentMdl2calendarYearIcon}
          width={16}
          height={40}
        />
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  yarimllkPosition: {
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
  yarimllkQymtlndrm: {
    fontSize: FontSize.homeMenuTextStyle_size,
    letterSpacing: -0.2,
    lineHeight: 20,
    fontFamily: FontFamily.homeMenuTextStyle,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    top: CompText.top,
    left: CompText.left,
    width: CompText.width,
  },
  yarimllkQymtlndrmWrapper: {
    height: "53.33%",
    top: "46.67%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "85%",
  },
  fluentMdl2calendarYearIcon: {
    right: "41.53%",
    bottom: "60%",
    left: "42.08%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: "0%",
    position: "absolute",
  },
  groupParent: {
    height: "55.56%",
    top: "14.81%",
    bottom: "29.63%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  component2: {
    top: 383,
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

export default Yarimillik;
