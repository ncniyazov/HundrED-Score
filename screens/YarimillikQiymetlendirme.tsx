import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Fluentmdl2calendaryear from "../assets/fluentmdl2calendaryear.svg";
import Rectangle1 from "../assets/rectangle-1.svg";
import Component from "../components/Component";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Vector1 from "../assets/vector1.svg";
import StatusBariOS1 from "../components/StatusBariOS1";
import GroupComponent1 from "../components/GroupComponent1";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const YarimillikQiymetlendirme = () => {
  return (
    <View style={styles.yarimillikQiymetlendirme}>
      <View
        style={[
          styles.yarimllkQymtlndrmParent,
          styles.yarimllkQymtlndrmParentLayout,
        ]}
      >
        <Text style={styles.yarimllkQymtlndrm}>YARIMİLLİK QİYMƏTLƏNDİRMƏ</Text>
        <Fluentmdl2calendaryear
          style={[styles.fluentMdl2calendarYearIcon, styles.groupChildPosition]}
          width={35}
          height={35}
        />
      </View>
      <Text style={[styles.ksqBallari, styles.bsqBaliTypo]}>KSQ BALLARI</Text>
      <View style={[styles.instanceParent, styles.groupParentLayout]}>
        <Rectangle1
          style={[styles.groupChild, styles.groupParentLayout]}
          width={57}
          height={57}
        />
        <Text style={[styles.text, styles.textTypo]}>90</Text>
      </View>
      <Text style={[styles.bsqBali, styles.bsqBaliTypo]}>BSQ BALI</Text>
      <View style={[styles.instanceGroup, styles.groupParentLayout]}>
        <Rectangle1
          style={[styles.groupChild, styles.groupParentLayout]}
          width={57}
          height={57}
        />
        <Text style={[styles.text, styles.textTypo]}>90</Text>
      </View>
      <View style={[styles.instanceContainer, styles.groupParentLayout]}>
        <Rectangle1
          style={[styles.groupChild, styles.groupParentLayout]}
          width={57}
          height={57}
        />
        <Text style={[styles.text, styles.textTypo]}>60</Text>
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <Rectangle1
          style={[styles.groupChild, styles.groupParentLayout]}
          width={57}
          height={57}
        />
        <Text style={[styles.text, styles.textTypo]}>80</Text>
      </View>
      <View style={[styles.instanceParent1, styles.groupParentLayout]}>
        <Rectangle1
          style={[styles.groupChild, styles.groupParentLayout]}
          width={57}
          height={57}
        />
        <Text style={[styles.text, styles.textTypo]}>70</Text>
      </View>
      <View style={[styles.instanceParent2, styles.groupParentLayout]}>
        <Rectangle1
          style={[styles.groupChild, styles.groupParentLayout]}
          width={57}
          height={57}
        />
        <Text style={[styles.text5, styles.textTypo]}>100</Text>
      </View>
      <View style={[styles.instanceParent3, styles.groupParentLayout]}>
        <Rectangle1
          style={[styles.groupChild, styles.groupParentLayout]}
          width={57}
          height={57}
        />
        <Text style={[styles.text, styles.textTypo]}>50</Text>
      </View>
      <Component component8Top={592} />
      <Component1 component9Top={592} />
      <Component2
        KVMFTop={592}
        vector={<Vector1 width={11} height={51} />}
      />
      <StatusBariOS1 statusBariOSMarginLeft="unset" statusBariOSLeft={28} />
      <GroupComponent1 />
    </View>
  );
};

const styles = StyleSheet.create({
  yarimllkQymtlndrmParentLayout: {
    height: 35,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  bsqBaliTypo: {
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    left: 24,
    fontFamily: FontFamily.homeMenuTextStyle,
    fontWeight: "700",
    fontSize: FontSize.homeMenuTextStyle_size,
    position: "absolute",
  },
  groupParentLayout: {
    height: 57,
    width: 57,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorBlack,
    top: 17,
    textAlign: "left",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    position: "absolute",
  },
  yarimllkQymtlndrm: {
    top: 6,
    left: 40,
    color: Color.foundationPrimaryPrimary900,
    textAlign: "center",
    width: 262,
    fontFamily: FontFamily.homeMenuTextStyle,
    fontWeight: "700",
    fontSize: FontSize.homeMenuTextStyle_size,
    position: "absolute",
  },
  fluentMdl2calendarYearIcon: {
    position: "absolute",
    overflow: "hidden",
  },
  yarimllkQymtlndrmParent: {
    top: 96,
    left: 64,
    width: 302,
  },
  ksqBallari: {
    top: 210,
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  text: {
    left: 18,
  },
  instanceParent: {
    top: 243,
    width: 57,
    left: 24,
  },
  bsqBali: {
    top: 332,
  },
  instanceGroup: {
    top: 315,
    left: 121,
  },
  instanceContainer: {
    left: 88,
    top: 243,
    width: 57,
  },
  groupView: {
    left: 152,
    top: 243,
    width: 57,
  },
  instanceParent1: {
    left: 216,
    top: 243,
    width: 57,
  },
  text5: {
    left: 13,
  },
  instanceParent2: {
    left: 280,
    top: 243,
    width: 57,
  },
  instanceParent3: {
    left: 344,
    top: 243,
    width: 57,
  },
  yarimillikQiymetlendirme: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default YarimillikQiymetlendirme;
