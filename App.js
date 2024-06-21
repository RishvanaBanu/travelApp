import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigations/stackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
