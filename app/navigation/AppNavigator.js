import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListingEditScreen from '../screens/ListingEditScreen';

import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import AddListButton from './AddListButton';

import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={'Feed'}
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) =>
          <MaterialCommunityIcons name={'home'} color={color} size={size} />
      }}
    />
    <Tab.Screen
      name={'ListingEdit'}
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => <AddListButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />,
        tabBarIcon: ({ color, size }) =>
          <MaterialCommunityIcons name={'plus-circle'} color={color} size={size} />
      })}
    />
    <Tab.Screen
      name={'Account'}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) =>
          <MaterialCommunityIcons name={'account'} color={color} size={size} />
      }}
    />
  </Tab.Navigator>
)

export default AppNavigator;
