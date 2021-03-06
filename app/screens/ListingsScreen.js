import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppActivityIndicator from '../components/AppActivityIndicator';

import colors from '../config/colors';
import routes from '../navigation/routes';

import useApi from '../hooks/useApi';
import listingsApi from '../api/listings';


function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings)
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <AppActivityIndicator visiable={loading} />
      <Screen style={styles.screen}>
        {error && <>
          <AppText>{'Couldn\'t retrieve the listings.'}</AppText>
          <AppButton title={'Retry'} onPress={loadListings} />
        </>}
        <FlatList
          data={listings}
          keyExtractor={listing => listing._id.toString()}
          renderItem={({ item }) =>
            <Card
              title={item.title}
              subtitle={"$" + item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          }
          refreshing={refreshing}
          onRefresh={() => {
            loadListings()
          }}
        />
      </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})

export default ListingsScreen;
