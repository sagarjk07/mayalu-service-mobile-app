import React from 'react';
import { View } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

import Card from './app/components/Card';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function App() {
  return (
    <ListingDetailsScreen />
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <AppText>Mayalu Removal Service</AppText>
    //   <MaterialCommunityIcons name='email' size={60} color='dodgerblue' />
    //   <AppButton title={'Login'} onPress={() => alert('Button Pressed')} />
    // </View>
    // <View style={{
    //   backgroundColor: '#f8f4f4',
    //   padding: 20,
    //   paddingTop: 100
    // }}>
    //   <Card
    //     title="Red Jacket for sale"
    //     price={'$100'}
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    // </View>
  );
}
