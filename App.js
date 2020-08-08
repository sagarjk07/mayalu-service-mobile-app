import React from 'react';
import { View } from 'react-native';

import AccountScreen from './app/screens/AccountScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';


import Icon from './app/components/Icon';
import Card from './app/components/Card';
import Screen from './app/components/Screen';
import AppText from './app/components/AppText';
import ListItem from './app/components/ListItem';
import AppButton from './app/components/AppButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function App() {
  return (
    <AccountScreen />
  );
}
