import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  TabBarIOSItem,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HydrateScreen from "./src/screens//HydrateScreen";
import MyFridgeScreen from "./src/screens//MyFridgeScreen";

import type { NavigatorScreenParams } from "@react-navigation/native";

type Params = {
  Hydration: undefined;
  MyFridge: undefined;
};
const Tab = createMaterialBottomTabNavigator<Params>();

function Tabs() {
  return (
    <Tab.Navigator barStyle={styles.tabBar} shifting={true} >
      <Tab.Screen
        name="Hydration"
        component={HydrateScreen}
        options={{
          tabBarLabel: "Hydration",
          tabBarColor: "#90e0ef",
          tabBarIcon: "cup-water",
        }}
      />
      <Tab.Screen
        name="MyFridge"
        component={MyFridgeScreen}
        options={{
          tabBarLabel: "My Fridge",
          tabBarColor: "#86b049",
          tabBarIcon: "fridge-variant",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    backgroundColor: "white",
  },
});
