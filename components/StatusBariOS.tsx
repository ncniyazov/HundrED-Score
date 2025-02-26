import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import Time from "./Time";
import Locationarrow from "../assets/location-arrow.svg";
import Cellularsignal from "../assets/cellular-signal.svg";
import Wifi from "../assets/wifi.svg";
import Battery from "../assets/battery.svg";
import { Gap, Color, Padding } from "../GlobalStyles";

export type StatusBariOSType = {
  /** Variant props */
  theme?: string;
};

const StatusBariOS = memo(({ theme = "Dark" }: StatusBariOSType) => {
  return (
    <View style={[styles.statusBarios, styles.iconsFlexBox]}>
      <Time
        theme="Light"
        hours="9"
        minutes="41"
        showLocation={false}
        locationArrow={<Locationarrow width={12} height={12} />}
      />
      <View style={[styles.icons, styles.iconsFlexBox]}>
        <Cellularsignal
          style={styles.cellularSignalIcon}
          width={18}
          height={10}
        />
        <Wifi
          style={[styles.wifiIcon, styles.iconLayout]}
          width={16}
          height={12}
        />
        <Battery
          style={[styles.batteryIcon, styles.iconLayout]}
          width={24}
          height={12}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  iconsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    overflow: "hidden",
    height: 12,
  },
  cellularSignalIcon: {},
  wifiIcon: {},
  batteryIcon: {},
  icons: {
    justifyContent: "flex-end",
    gap: Gap.gap_lg,
  },
  statusBarios: {
    backgroundColor: Color.colorGray,
    width: 375,
    height: 48,
    justifyContent: "space-between",
    paddingLeft: Padding.p_16xl,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_xl,
    paddingBottom: Padding.p_base,
  },
});

export default StatusBariOS;
