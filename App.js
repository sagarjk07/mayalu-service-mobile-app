import React, { useState } from 'react';
import { View, TextInput, Text, Switch } from 'react-native';

import AccountScreen from './app/screens/AccountScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';


import Icon from './app/components/Icon';
import Card from './app/components/Card';
import Screen from './app/components/Screen';
import AppText from './app/components/AppText';
import ListItem from './app/components/ListItem';
import AppButton from './app/components/AppButton';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing ', value: 2 },
  { label: 'Camera', value: 3 },

]

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker selectedItem={category} onSelectItem={item => setCategory(item)} items={categories} icon={'apps'} placeholder={'Category'} />
      <AppTextInput icon={'email'} placeholder={'Email'} />
    </Screen>
  );
}
