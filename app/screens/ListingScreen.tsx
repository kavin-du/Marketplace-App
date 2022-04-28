import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import Card from '../components/Card';
import { colors } from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';


export default function ListingScreen() {
  const navigation = useNavigation();

  // rename when destructuring
  const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);

  // execute only once
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title='Retry' onPress={loadListings} />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({ item }) =>
            <Card
              title={item.title}
              subTitle={'$' + item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          }
        />
      </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  }
})