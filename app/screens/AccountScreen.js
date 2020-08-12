import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Icon from '../components/Icon';
import Screen from '../components/Screen';
import { ListItem, ListItemSeparator } from '../components/Lists';

import colors from '../config/colors';
import routes from '../navigation/routes';

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
    },
    targetScreen: routes.MESSAGES
  }
]

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={'Sujit Kumar Libi'}
          subtitle={'sujit@pandalytic.com'}
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
