import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import StatusBariOS1 from "../components/StatusBariOS1";
import Fluentmdl2calendaryear from "../assets/fluentmdl2calendaryear.svg";
import Fluentcolorcheckbox20 from "../assets/fluentcolorcheckbox20.svg";
import Component2 from "../components/Component2";
import Vector1 from "../assets/vector1.svg";
import Component3 from "../components/Component3";
import Rectangle11 from "../assets/rectangle-11.svg";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const YarimillikQiymetlendirme1 = () => {
  return (
    <View style={styles.yarimillikQiymetlendirme}>
      <StatusBariOS1 statusBariOSMarginLeft="unset" statusBariOSLeft={28} />
      <Text style={styles.yarimllkQymtlndrm}>YARIMİLLİK QİYMƏTLƏNDİRMƏ</Text>
      <Fluentmdl2calendaryear
        style={styles.fluentMdl2calendarYearIcon}
        width={35}
        height={35}
      />
      <Text style={[styles.yarmilRzindKeirilmi, styles.yarmilTypo]}>
        Yarımil ərzində keçirilmiş summativ qiymətləndirmələrin sayı:
      </Text>
      <View style={styles.yarmilRzindBykSummativParent}>
        <Text style={[styles.yarmilRzindByk, styles.yarmilTypo]}>
          Yarımil ərzində BÖYÜK summativ qiymətləndirmə keçirilmişdir.
        </Text>
        <Fluentcolorcheckbox20
          style={styles.fluentColorcheckbox20Icon}
          width={19}
          height={19}
        />
      </View>
      <Component2
        KVMFTop={508}
        vector={<Vector1 width={11} height={51} />}
      />
      <Component3 />
      <Rectangle11
        style={styles.yarimillikQiymetlendirmeChild}
        width={57}
        height={40}
      />
      <Text style={[styles.text, styles.yarmilTypo]}>6</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  yarmilTypo: {
    textAlign: "left",
    fontFamily: FontFamily.homeMenuTextStyle,
    position: "absolute",
  },
  yarimllkQymtlndrm: {
    top: 185,
    left: 116,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    color: Color.foundationPrimaryPrimary900,
    textAlign: "center",
    width: 197,
    fontFamily: FontFamily.homeMenuTextStyle,
    position: "absolute",
  },
  fluentMdl2calendarYearIcon: {
    top: 124,
    left: 190,
    position: "absolute",
    overflow: "hidden",
  },
  yarmilRzindKeirilmi: {
    top: 351,
    left: 22,
    fontSize: 22,
    letterSpacing: -0.4,
    width: 351,
    height: 48,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  yarmilRzindByk: {
    top: 0,
    left: 27,
    fontSize: FontSize.size_base,
    letterSpacing: -0.3,
    lineHeight: 15,
    fontStyle: "italic",
    width: 226,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
  },
  fluentColorcheckbox20Icon: {
    top: 5,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  yarmilRzindBykSummativParent: {
    top: 436,
    left: 88,
    width: 253,
    height: 30,
    position: "absolute",
  },
  yarimillikQiymetlendirmeChild: {
    top: 359,
    left: 349,
    position: "absolute",
  },
  text: {
    top: 367,
    left: 371,
    fontSize: FontSize.homeMenuTextStyle_size,
    color: Color.colorBlack,
  },
  yarimillikQiymetlendirme: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default YarimillikQiymetlendirme1;
