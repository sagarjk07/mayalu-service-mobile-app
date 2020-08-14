import React from 'react';

import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';

import OfflineNotice from './app/components/OfflineNotice';

export default function App() {
  const netInfo = useNetInfo();
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
