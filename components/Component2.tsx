import React, { useMemo, memo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type Component2Type = {
  vector?: React.ReactNode;

  /** Style props */
  KVMFTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component2 = memo(({ KVMFTop, vector }: Component2Type) => {
  const KVMFStyle = useMemo(() => {
    return {
      ...getStyleValue("top", KVMFTop),
    };
  }, [KVMFTop]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.KVMF, KVMFStyle]}
      onPress={() => navigation.goBack()}
    >
      <View style={[styles.KVMFChild, styles.vectorIconPosition]} />
      <View style={styles.vectorParent}>
        <View>{vector && vector}</View>
        <Text style={styles.ger}>GERİ</Text>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  vectorIconPosition: {
    left: "0%",
    position: "absolute",
  },
  KVMFChild: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.foundationPrimaryPrimary50,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 1,
    top: "0%",
  },
  ger: {
    left: "24.32%",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.homeMenuTextStyle,
    color: Color.secondary,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  vectorParent: {
    height: "41.46%",
    width: "37%",
    top: "29.27%",
    right: "32%",
    bottom: "29.27%",
    left: "31%",
    position: "absolute",
  },
  KVMF: {
    top: 631,
    left: 24,
    width: 100,
    height: 41,
    position: "absolute",
  },
});

export default Component2;
