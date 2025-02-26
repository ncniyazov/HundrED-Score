import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type Component1Type = {
  /** Style props */
  component9Top?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component1 = memo(({ component9Top }: Component1Type) => {
  const component9Style = useMemo(() => {
    return {
      ...getStyleValue("top", component9Top),
    };
  }, [component9Top]);

  return (
    <View style={[styles.component9, component9Style]}>
      <View style={styles.component9Child} />
      <Text style={styles.sifirla}>SIFIRLA</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  component9Child: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorFirebrick,
    borderStyle: "solid",
    borderColor: Color.secondary,
    borderWidth: 1,
    position: "absolute",
  },
  sifirla: {
    top: "29.27%",
    left: "28%",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.homeMenuTextStyle,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  component9: {
    top: 631,
    left: 197,
    width: 100,
    height: 41,
    position: "absolute",
  },
});

export default Component1;
