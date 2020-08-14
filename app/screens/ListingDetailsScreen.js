import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import { ListItem } from '../components/Lists';

import colors from '../config/colors';

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image
        tint={'light'}
        style={styles.image}
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            subtitle={'5 Listing'}
            title={'Sujit Kumar Libi'}
            image={require('../assets/default.png')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 300
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  userContainer: {
    marginVertical: 40
  }
});

export default ListingDetailsScreen;
