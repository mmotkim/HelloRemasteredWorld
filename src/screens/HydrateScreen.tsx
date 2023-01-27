import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React, { Component, useEffect, useState } from "react";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Font from 'expo-font'

const drinkWater = () => {};

type HydrateString = { text: string };
const HydrateText = (props: HydrateString) => {};

const Pulse = ({ delay = 0 }) => {
  const animation = useSharedValue(0);
  useEffect(() => {
    animation.value = withRepeat(
      withTiming(1, {
        duration: 400,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, []);
  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      animation.value,
      [0, 1],
      [0.6, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity: opacity,
      transform: [{ scale: animation.value }],
    };
  });
  return <Animated.View style={[styles.circle, animatedStyles]} />;
};

export default function HydrateScreen() {
  return (
    <View style={styles.body}>
      <Pulse />
      <Pressable onPress={drinkWater}>
        <View style={styles.Button}>
          <Text style={styles.BText}>{}</Text>
        </View>
        
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F5F5B",
  },
  Button: {
    backgroundColor: "#00AEAD",
    width: 300,
    borderRadius: 150,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  BText: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "Sans",
  },
  circle: {
    width: 375,
    borderRadius: 375 / 2,
    height: 375,
    position: "absolute",
    borderColor: "#20525C",
    borderWidth: 4,
    backgroundColor: "#00AECF",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  innerCircle: {
    width: 300,
    borderRadius: 150,
    height: 300,
    zIndex: -1,
    position: "absolute",
    backgroundColor: "#54C2CC",
  },
});
