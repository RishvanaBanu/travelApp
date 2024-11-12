import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigations/stackNavigation';
// import { Store } from './src/store/storeContext';
import { StateProvider } from './src/context/stateContext';

export default function App() {
  return (
    <StateProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </StateProvider>
  );
}
