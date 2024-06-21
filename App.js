import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
// import { BottomNavigation } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigations/bottomNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
