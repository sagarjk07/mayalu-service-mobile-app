import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';

import colors from '../config/colors';
import routes from '../navigation/routes';

const listings = [
  {
    id: 1,
    title: 'Red Jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2,
    title: 'Couch for sale',
    price: 100,
    image: require('../assets/couch.jpg')
  },
  {
    id: 3,
    title: 'Chair for sale',
    price: 100,
    image: require('../assets/chair.jpg')
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            image={item.image}
            title={item.title}
            subtitle={"$" + item.price}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})

export default ListingsScreen;
