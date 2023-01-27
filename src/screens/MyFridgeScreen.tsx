import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TabBarIOSItem, Text, TouchableOpacity, View } from 'react-native';

export default function HydrateScreen() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello, world!</Text>
      </View>
    );
  };