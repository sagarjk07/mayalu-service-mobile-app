import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={'Account'} component={AccountScreen} />
    <Stack.Screen name={'Messages'} component={MessagesScreen} />
    <Stack.Screen name={'AboutUs'} component={AboutUsScreen} />

  </Stack.Navigator>
);

export default AccountNavigator;
