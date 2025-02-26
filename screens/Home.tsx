import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Pressable } from "react-native";
import Yarimillik from "../components/YarimillikComponent";
import İllikComponent from "../components/İllikComponent";
import SualSayinaGrBal from "../components/SSGBComponent";
import KVMF from "../components/KVMFComponent";
import Component8 from "../components/Component8";
import Group11 from "../assets/group-11.svg"; 
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import * as Animatable from 'react-native-animatable';

const Home = () => {


  return (

    <View style={styles.home}>
        <Animatable.View animation="bounceInLeft" duration={600}  > 
          <Yarimillik />
        </Animatable.View> 
        
      <Animatable.View animation="bounceInRight" duration={700}>
        <İllikComponent />
      </Animatable.View>
      <Animatable.View animation="bounceInLeft" duration={800}>
        <SualSayinaGrBal />
      </Animatable.View>
      <Animatable.View animation="bounceInRight" duration={900}>
        <KVMF />
      </Animatable.View>
      <Component8 />
      <View style={[styles.instanceParent, styles.yarimllkVLlkLayout]}>
        <Animatable.View animation="bounceInDown" duration={900} style={{left:40 }}>
          <Group11 style={styles.groupChild} width={137} height={116} />
        </Animatable.View>
        <View style={{flexDirection: 'row'}}>
          <Animatable.Text animation="pulse" iterationCount={1} duration={800} style={[styles.yarimllkVLlk, styles.yarimllkVLlkLayout]}>
          Hundr
        </Animatable.Text>
          <Animatable.Text animation="zoomIn" iterationCount={1} duration={1000} style={[styles.yarimllkVLlk2, styles.yarimllkVLlkLayout]}>
          ED
        </Animatable.Text>
          <Animatable.Text animation="zoomInLeft" iterationCount={1} duration={1200} style={[styles.yarimllkVLlk3, styles.yarimllkVLlkLayout]}>
           Score
        </Animatable.Text>
        </View>
      </View>
    </View>
    
  );
};
const styles = StyleSheet.create({
  yarimllkVLlkLayout: {
    width: 178,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 21,
    position: "absolute",
  },
  yarimllkVLlk: {
    top: 130,
    left: -10,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.homeMenuTextStyle,
    color: Color.foundationPrimaryPrimary900,
    textAlign: "center",
  },
  yarimllkVLlk2: {
    top: 130,
    left: 30,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.homeMenuTextStyle,
    color: Color.secondary,
    textAlign: "center",
  },
  yarimllkVLlk3: {
    top: 130,
    left: 80,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.homeMenuTextStyle,
    color: Color.foundationPrimaryPrimary900,
    textAlign: "center",
  },
  instanceParent: {
    top: 105,
    left: 85,
    height: 188,
  },
  home: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "99%",
    height: 932,
    overflow: "hidden",
  },
});

export default Home;
