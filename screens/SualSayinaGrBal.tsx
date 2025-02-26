import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Rectangle1 from "../assets/rectangle-1.svg";
import Component from "../components/Component";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Vector1 from "../assets/vector1.svg";
import StatusBariOS1 from "../components/StatusBariOS1";
import Vector3 from "../assets/vector3.svg";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SualSayinaGrBal = () => {
  return (
    <View style={styles.sualSayinaGrBal}>
      <View style={[styles.sualSayinaGrBalInner, styles.sualLayout]}>
        <View style={[styles.instanceParent, styles.groupInnerPosition]}>
          <Rectangle1
            style={[styles.instanceParent, styles.groupInnerPosition]}
            width={57}
            height={57}
          />
          <Text style={[styles.text, styles.balTypo]}>90</Text>
        </View>
      </View>
      <View style={[styles.sualSayinaGrBalChild, styles.sualLayout]}>
        <View style={[styles.instanceParent, styles.groupInnerPosition]}>
          <Rectangle1
            style={[styles.instanceParent, styles.groupInnerPosition]}
            width={57}
            height={57}
          />
          <Text style={[styles.text, styles.balTypo]}>75</Text>
        </View>
      </View>
      <Text style={[styles.mumiSualSay, styles.sayTypo]}>Ümumi sual sayı:</Text>
      <Text style={[styles.dzgnCavabSay, styles.sayTypo]}>
        Düzgün cavab sayı:
      </Text>
      <Component component8Top={563} />
      <Component1 component9Top={563} />
      <Component2
        KVMFTop={563}
        vector={<Vector1 width={11} height={51} />}
      />
      <StatusBariOS1 statusBariOSMarginLeft="unset" statusBariOSLeft={28} />
      <View style={styles.sualSayinaGrBalItem} />
      <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={styles.ntc}>NƏTİCƏ</Text>
      </View>
      <Text style={[styles.bal, styles.balTypo]}>Bal:</Text>
      <Text style={[styles.qiymt, styles.balTypo]}>Qiymət:</Text>
      <Text style={[styles.text2, styles.textTypo]}>83.33</Text>
      <Text style={[styles.text3, styles.textTypo]}>5</Text>
      <View style={[styles.groupParent, styles.vectorIconLayout]}>
        <View style={[styles.groupWrapper, styles.wrapperLayout]}>
          <View style={[styles.sualSayinaGrBalWrapper, styles.wrapperLayout]}>
            <Text style={styles.sualSayinaGr}>SUAL SAYINA GÖRƏ BAL</Text>
          </View>
        </View>
        <Vector3
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          width={35}
          height={35}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sualLayout: {
    height: 57,
    width: 57,
    position: "absolute",
  },
  groupInnerPosition: {
    left: 0,
    top: 0,
  },
  balTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    position: "absolute",
  },
  sayTypo: {
    fontSize: FontSize.size_5xl,
    left: 28,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.homeMenuTextStyle,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 42,
    width: 125,
    position: "absolute",
  },
  textTypo: {
    color: Color.secondary,
    left: 225,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 35,
    position: "absolute",
  },
  wrapperLayout: {
    height: 24,
    width: 204,
    position: "absolute",
  },
  instanceParent: {
    position: "absolute",
  },
  text: {
    top: 17,
    left: 18,
    width: 21,
  },
  sualSayinaGrBalInner: {
    top: 234,
    left: 346,
    width: 57,
  },
  sualSayinaGrBalChild: {
    top: 298,
    left: 346,
    width: 57,
  },
  mumiSualSay: {
    top: 248,
  },
  dzgnCavabSay: {
    top: 312,
  },
  sualSayinaGrBalItem: {
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
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    position: "absolute",
  },
  rectangleParent: {
    top: 379,
    left: 153,
  },
  bal: {
    left: 185,
    top: 442,
  },
  qiymt: {
    left: 150,
    top: 466,
  },
  text2: {
    top: 442,
  },
  text3: {
    top: 466,
  },
  sualSayinaGr: {
    color: Color.foundationPrimaryPrimary900,
    textAlign: "center",
    width: 204,
    fontWeight: "700",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  sualSayinaGrBalWrapper: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 6,
    left: 41,
  },
  vectorIcon: {
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 95,
    left: 93,
    width: 245,
  },
  sualSayinaGrBal: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SualSayinaGrBal;
