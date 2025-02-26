import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type ComponentType = {
  /** Style props */
  component8Top?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component = memo(({ component8Top }: ComponentType) => {
  const component8Style = useMemo(() => {
    return {
      ...getStyleValue("top", component8Top),
    };
  }, [component8Top]);

  return (
    <View style={[styles.component8, component8Style]}>
      <View style={styles.component8Child} />
      <Text style={styles.hesabla}>HESABLA</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  component8Child: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.secondary,
    position: "absolute",
  },
  hesabla: {
    top: "29.27%",
    left: "23%",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.homeMenuTextStyle,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  component8: {
    top: 631,
    left: 306,
    width: 100,
    height: 41,
    position: "absolute",
  },
});

export default Component;
