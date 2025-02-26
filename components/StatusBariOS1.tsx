import React, { useMemo, memo } from "react";
import { StyleSheet, View } from "react-native";
import StatusBariOS from "./StatusBariOS";

export type StatusBariOS1Type = {
  /** Style props */
  statusBariOSMarginLeft?: number | string;
  statusBariOSLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusBariOS1 = memo(
  ({ statusBariOSMarginLeft, statusBariOSLeft }: StatusBariOS1Type) => {
    const statusBariOSStyle = useMemo(() => {
      return {
        ...getStyleValue("marginLeft", statusBariOSMarginLeft),
        ...getStyleValue("left", statusBariOSLeft),
      };
    }, [statusBariOSMarginLeft, statusBariOSLeft]);

    return (
      <View style={[styles.statusBarios, statusBariOSStyle]}>
        <StatusBariOS theme="Light" />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  statusBarios: {
    position: "absolute",
    marginLeft: -187,
    top: 6,
    left: "50%",
    flexDirection: "row",
  },
});

export default StatusBariOS1;
