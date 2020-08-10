import React, { useState } from 'react';
import { View, TextInput, Text, Switch } from 'react-native';

import LoginScreen from './app/screens/LoginScreen';
import AccountScreen from './app/screens/AccountScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';


import Icon from './app/components/Icon';
import Card from './app/components/Card';
import Screen from './app/components/Screen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <ListingEditScreen />
  );
}
