import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Rectangle1 from "../assets/rectangle-1.svg";
import Component from "../components/Component";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Vector1 from "../assets/vector1.svg";
import StatusBariOS1 from "../components/StatusBariOS1";
import GroupComponent from "../components/GroupComponent";
import Tablersquarepercentage from "../assets/tablersquarepercentage.svg";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const KeyfiyyetVeMuveffeqiyyet = () => {
  return (
    <View style={styles.keyfiyyetVeMuveffeqiyyet}>
      <View style={[styles.instanceParent, styles.instanceLayout]}>
        <Rectangle1 style={styles.groupChild} width={57} height={57} />
        <Text style={styles.text}>25</Text>
      </View>
      <View style={[styles.instanceGroup, styles.instanceLayout]}>
        <Rectangle1 style={styles.groupChild} width={57} height={57} />
        <Text style={styles.text}>10</Text>
      </View>
      <View style={[styles.instanceContainer, styles.instanceLayout]}>
        <Rectangle1 style={styles.groupChild} width={57} height={57} />
        <Text style={styles.text}>15</Text>
      </View>
      <Text style={[styles.sinifZrMumi, styles.qiymtiTypo]}>
        Sinif üzrə ümumi şagird sayı:
      </Text>
      <Text style={[styles.qiymtiAlanAgirdlrin, styles.qiymtiTypo]}>
        “2” qiyməti alan şagirdlərin sayı:
      </Text>
      <Text style={[styles.v5Qiymti, styles.qiymtiTypo]}>
        “4” və “5” qiyməti alan şagirdlərin sayı:
      </Text>
      <Component />
      <Component1 />
      <Component2 vector={<Vector1 width={11} height={51} />} />
      <StatusBariOS1 statusBariOSMarginLeft="unset" statusBariOSLeft={28} />
      <GroupComponent />
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <Text style={[styles.keyfyytVMvffqyyt, styles.groupParentLayout]}>
                KEYFİYYƏT VƏ MÜVƏFFƏQİYYƏT FAİZİ
              </Text>
            </View>
          </View>
        </View>
        <Tablersquarepercentage
          style={styles.tablersquarePercentageIcon}
          width={35}
          height={35}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  instanceLayout: {
    height: 57,
    width: 57,
    left: 346,
    position: "absolute",
  },
  qiymtiTypo: {
    fontSize: FontSize.size_lgi,
    left: 28,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.homeMenuTextStyle,
    position: "absolute",
  },
  groupParentLayout: {
    width: 204,
    position: "absolute",
  },
  groupLayout: {
    height: 48,
    width: 204,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 17,
    left: 18,
    width: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    position: "absolute",
  },
  instanceParent: {
    top: 234,
  },
  instanceGroup: {
    top: 298,
  },
  instanceContainer: {
    top: 362,
  },
  sinifZrMumi: {
    top: 247,
  },
  qiymtiAlanAgirdlrin: {
    top: 311,
  },
  v5Qiymti: {
    top: 375,
  },
  keyfyytVMvffqyyt: {
    fontWeight: "700",
    color: Color.foundationPrimaryPrimary900,
    textAlign: "center",
    fontFamily: FontFamily.homeMenuTextStyle,
    fontSize: FontSize.homeMenuTextStyle_size,
    width: 204,
    left: 0,
    top: 0,
  },
  groupContainer: {
    top: 0,
  },
  groupWrapper: {
    top: 40,
  },
  tablersquarePercentageIcon: {
    left: 85,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    top: 95,
    left: 113,
    height: 88,
  },
  keyfiyyetVeMuveffeqiyyet: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default KeyfiyyetVeMuveffeqiyyet;
