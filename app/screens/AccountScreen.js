import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Icon from '../components/Icon';
import Screen from '../components/Screen';
import { ListItem, ListItemSeparator } from '../components/Lists';

import colors from '../config/colors';
import routes from '../navigation/routes';

import useAuth from '../auth/useAuth';

const menuItems = [
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.primary
    },
    targetScreen: routes.MESSAGES
  },
  {
    title: 'About Us',
    icon: {
      name: 'email',
      backgroundColor: colors.logo
    },
    targetScreen: routes.ABOUTUS
  }
]

function AccountScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require('../assets/default.png')}
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
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          }
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View>
        <ListItem
          title={'Logout'}
          IconComponent={
            <Icon name={'logout'} backgroundColor={colors.warning} />
          }
          onPress={() => logout()}
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
