import React from 'react';
import { View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

import Card from './app/components/Card';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function App() {
  return (
    <MessagesScreen />
  );
}
