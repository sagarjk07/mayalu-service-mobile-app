import React from 'react';
import { View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function App() {
  return (
    <WelcomeScreen />
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <AppText>Mayalu Removal Service</AppText>
    //   <MaterialCommunityIcons name='email' size={60} color='dodgerblue' />
    //   <AppButton title={'Login'} onPress={() => alert('Button Pressed')} />
    // </View>
  );
}
