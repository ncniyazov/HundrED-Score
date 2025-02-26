import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Group from "../assets/group.svg";
import Group1 from "../assets/group1.svg";
import Vector from "../assets/vector.svg";
import StatusBariOS1 from "../components/StatusBariOS1";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Group
        style={[styles.groupIcon, styles.groupIconLayout]}
        width={44}
        height={17}
      />
      <View style={styles.groupParent}>
        <View style={[styles.groupGroup, styles.groupPosition]}>
          <Group1
            style={[styles.groupIcon1, styles.groupParentPosition]}
            width={100}
            height={100}
          />
          <Text style={[styles.a, styles.aTypo]}>A</Text>
        </View>
        <View style={styles.vectorIcon1Position}>
          <Group1
            style={[styles.groupIcon1, styles.groupParentPosition]}
            width={100}
            height={100}
          />
          <Text style={[styles.a, styles.aTypo]}>B</Text>
        </View>
        <View style={[styles.groupView, styles.groupPosition]}>
          <Group1
            style={[styles.groupIcon1, styles.groupParentPosition]}
            width={100}
            height={100}
          />
          <Text style={[styles.c, styles.aTypo]}>C</Text>
        </View>
        <View style={[styles.groupParent1, styles.groupPosition]}>
          <Group1
            style={[styles.groupIcon1, styles.groupParentPosition]}
            width={100}
            height={100}
          />
          <Text style={[styles.c, styles.aTypo]}>D</Text>
        </View>
        <View style={[styles.groupParent2, styles.groupParentPosition]}>
          <Group1
            style={[styles.groupIcon1, styles.groupParentPosition]}
            width={100}
            height={100}
          />
          <Text style={[styles.e, styles.aTypo]}>E</Text>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.groupParent4, styles.groupParentPosition]}>
          <View style={[styles.groupGroup, styles.groupPosition]}>
            <Group1
              style={[styles.groupIcon1, styles.groupParentPosition]}
              width={100}
              height={100}
            />
            <Text style={[styles.a, styles.aTypo]}>A</Text>
          </View>
          <View style={styles.vectorIcon1Position}>
            <Group1
              style={[styles.groupIcon1, styles.groupParentPosition]}
              width={100}
              height={100}
            />
            <Text style={[styles.a, styles.aTypo]}>B</Text>
          </View>
          <View style={[styles.groupView, styles.groupPosition]}>
            <Group1
              style={[styles.groupIcon1, styles.groupParentPosition]}
              width={100}
              height={100}
            />
            <Text style={[styles.c, styles.aTypo]}>C</Text>
          </View>
          <View style={[styles.groupParent1, styles.groupPosition]}>
            <Group1
              style={[styles.groupIcon1, styles.groupParentPosition]}
              width={100}
              height={100}
            />
            <Text style={[styles.c, styles.aTypo]}>D</Text>
          </View>
          <View style={[styles.groupParent2, styles.groupParentPosition]}>
            <Group1
              style={[styles.groupIcon1, styles.groupParentPosition]}
              width={100}
              height={100}
            />
            <Text style={[styles.e, styles.aTypo]}>E</Text>
          </View>
        </View>
        <Vector
          style={[styles.vectorIcon, styles.groupPosition]}
          width={19}
          height={100}
        />
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.groupParent4, styles.groupParentPosition]}>
          <View style={[styles.groupParent4, styles.groupParentPosition]}>
            <View style={[styles.groupGroup, styles.groupPosition]}>
              <Group1
                style={[styles.groupIcon1, styles.groupParentPosition]}
                width={100}
                height={100}
              />
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <View style={styles.vectorIcon1Position}>
              <Group1
                style={[styles.groupIcon1, styles.groupParentPosition]}
                width={100}
                height={100}
              />
              <Text style={[styles.a, styles.aTypo]}>B</Text>
            </View>
            <View style={[styles.groupView, styles.groupPosition]}>
              <Group1
                style={[styles.groupIcon1, styles.groupParentPosition]}
                width={100}
                height={100}
              />
              <Text style={[styles.c, styles.aTypo]}>C</Text>
            </View>
            <View style={[styles.groupParent1, styles.groupPosition]}>
              <Group1
                style={[styles.groupIcon1, styles.groupParentPosition]}
                width={100}
                height={100}
              />
              <Text style={[styles.c, styles.aTypo]}>D</Text>
            </View>
            <View style={[styles.groupParent2, styles.groupParentPosition]}>
              <Group1
                style={[styles.groupIcon1, styles.groupParentPosition]}
                width={100}
                height={100}
              />
              <Text style={[styles.e, styles.aTypo]}>E</Text>
            </View>
          </View>
        </View>
        <Vector
          style={[styles.vectorIcon1, styles.vectorIcon1Position]}
          width={19}
          height={100}
        />
      </View>
      <StatusBariOS1 statusBariOSMarginLeft={-187} statusBariOSLeft="50%" />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "18.68%",
    position: "absolute",
  },
  groupParentPosition: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  aTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    top: "5.9%",
    position: "absolute",
  },
  vectorIcon1Position: {
    left: "20.33%",
    right: "60.99%",
    bottom: "0%",
    top: "0%",
    width: "18.68%",
    height: "100%",
    position: "absolute",
  },
  groupIcon: {
    top: "37.02%",
    right: "27.91%",
    bottom: "45.71%",
    left: "27.91%",
    position: "absolute",
  },
  groupIcon1: {
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0%",
  },
  a: {
    left: "26.47%",
  },
  groupGroup: {
    left: "0%",
    right: "81.32%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  c: {
    left: "23.53%",
  },
  groupView: {
    right: "40.66%",
    left: "40.66%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  groupParent1: {
    right: "20.33%",
    left: "60.99%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  e: {
    left: "29.41%",
  },
  groupParent2: {
    left: "81.32%",
    width: "18.68%",
    right: "0%",
  },
  groupParent: {
    height: "3.64%",
    width: "42.33%",
    top: "59.44%",
    right: "28.84%",
    bottom: "36.92%",
    left: "28.84%",
    position: "absolute",
  },
  groupParent4: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  vectorIcon: {
    left: "0%",
    right: "81.32%",
    bottom: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  splash: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Splash;
