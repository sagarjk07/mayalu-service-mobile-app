import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import { ListItem } from '../components/Lists';

import ContactSellerForm from "../components/ContactSellerForm";

import colors from '../config/colors';

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
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
              title={listing.userInfo.name}
              subtitle={listing.userInfo.email}
              image={require('../assets/default.png')}
            />
          </View>
          <ContactSellerForm listing={listing} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  detailsContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15
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
    marginVertical: 5
  }
});

export default ListingDetailsScreen;
