import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Rectangle1 from "../assets/rectangle-1.svg";
import Component from "../components/Component";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Vector1 from "../assets/vector1.svg";
import StatusBariOS1 from "../components/StatusBariOS1";
import Iwwayear1 from "../assets/iwwayear1.svg";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LlikQiymetlendirme = () => {
  return (
    <View style={styles.llikQiymetlendirme}>
      <View style={[styles.llikQiymetlendirmeInner, styles.llikLayout]}>
        <View style={[styles.instanceParent, styles.groupInnerPosition]}>
          <Rectangle1
            style={[styles.instanceParent, styles.groupInnerPosition]}
            width={57}
            height={57}
          />
          <Text style={[styles.text, styles.llikTypo]}>90</Text>
        </View>
      </View>
      <View style={[styles.llikQiymetlendirmeChild, styles.llikLayout]}>
        <View style={[styles.instanceParent, styles.groupInnerPosition]}>
          <Rectangle1
            style={[styles.instanceParent, styles.groupInnerPosition]}
            width={57}
            height={57}
          />
          <Text style={[styles.text, styles.llikTypo]}>60</Text>
        </View>
      </View>
      <Text style={[styles.ciYarmillikBal, styles.yarmillikTypo]}>
        1 - ci yarımillik balı:
      </Text>
      <Text style={[styles.ciYarmillikBal1, styles.yarmillikTypo]}>
        2 - ci yarımillik balı:
      </Text>
      <Component component8Top={553} />
      <Component1 component9Top={553} />
      <Component2
        KVMFTop={553}
        vector={<Vector1 width={11} height={51} />}
      />
      <StatusBariOS1 statusBariOSMarginLeft="unset" statusBariOSLeft={28} />
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.llkQymtlndrmWrapper, styles.llkLayout]}>
          <Text style={[styles.llkQymtlndrm, styles.ntcTypo]}>
            İLLİK QİYMƏTLƏNDİRMƏ
          </Text>
        </View>
        <Iwwayear1
          style={[styles.iwwayearIcon, styles.groupParentLayout]}
          width={33}
          height={33}
        />
      </View>
      <View style={styles.llikQiymetlendirmeItem} />
      <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={[styles.ntc, styles.ntcTypo]}>NƏTİCƏ</Text>
      </View>
      <Text style={[styles.llikBal, styles.llikTypo]}>İllik bal:</Text>
      <Text style={[styles.llikQiymt, styles.llikTypo]}>İllik qiymət:</Text>
      <Text style={[styles.text2, styles.textTypo]}>60</Text>
      <Text style={[styles.text3, styles.textTypo]}>3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  llikLayout: {
    height: 57,
    width: 57,
    position: "absolute",
  },
  groupInnerPosition: {
    left: 0,
    top: 0,
  },
  llikTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    textAlign: "left",
    position: "absolute",
  },
  yarmillikTypo: {
    fontSize: FontSize.size_5xl,
    left: 28,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.homeMenuTextStyle,
    position: "absolute",
  },
  groupParentLayout: {
    height: 33,
    position: "absolute",
  },
  llkLayout: {
    height: 23,
    width: 215,
  },
  ntcTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 42,
    width: 125,
    position: "absolute",
  },
  textTypo: {
    color: Color.secondary,
    left: 257,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    position: "absolute",
  },
  instanceParent: {
    position: "absolute",
  },
  text: {
    top: 17,
    left: 18,
    width: 21,
    textAlign: "left",
  },
  llikQiymetlendirmeInner: {
    top: 234,
    left: 346,
    width: 57,
  },
  llikQiymetlendirmeChild: {
    top: 298,
    left: 346,
    width: 57,
  },
  ciYarmillikBal: {
    top: 248,
  },
  ciYarmillikBal1: {
    top: 312,
  },
  llkQymtlndrm: {
    color: Color.foundationPrimaryPrimary900,
    textAlign: "center",
    height: 23,
    width: 215,
    left: 0,
    top: 0,
  },
  llkQymtlndrmWrapper: {
    top: 5,
    left: 36,
    position: "absolute",
  },
  iwwayearIcon: {
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 96,
    left: 90,
    width: 251,
  },
  llikQiymetlendirmeItem: {
    top: 399,
    left: 91,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro,
    width: 249,
    height: 111,
    position: "absolute",
  },
  groupInner: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.foundationPrimaryPrimary400,
    left: 0,
    top: 0,
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
    textAlign: "left",
  },
  rectangleParent: {
    top: 379,
    left: 153,
  },
  llikBal: {
    left: 185,
    top: 442,
    textAlign: "left",
  },
  llikQiymt: {
    top: 466,
    left: 153,
    textAlign: "left",
  },
  text2: {
    top: 442,
  },
  text3: {
    top: 466,
  },
  llikQiymetlendirme: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LlikQiymetlendirme;
