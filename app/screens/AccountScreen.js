import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Icon from '../components/Icon';
import Card from '../components/Card';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import AppButton from '../components/AppButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    }
  }
]

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={'Sujit Kumar Libi'}
          subtitle={'sujit@pandalytic.com'}
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
            />
          }
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <View>
        <ListItem
          title={'Logout'}
          IconComponent={
            <Icon name={'logout'} backgroundColor={colors.warning} />
          }
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light
  }
});

export default AccountScreen;
