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

// const listings = [
//     {
//         id: 1,
//         title: 'Nice watch you',
//         price: 100,
//         image: require('../assets/watch.jpg'),
//     },
//     {
//         id: 2,
//         title: 'Used laptop',
//         price: 1000,
//         image: require('../assets/laptop.jpg'),
//     },
// ];

export default function ListingScreen() {
  const navigation = useNavigation();

  const [listings, setListings] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // execute only once
  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    // cannot await inside useeffect, therefore a seperate function
    setLoading(true);
    const response: any = await listingsApi.getListings();
    setLoading(false);

    if(!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  }

  return (
      <Screen style={styles.screen}>
        {error && (
          <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title='Retry' onPress={loadListings} />
          </>
        )}
        <ActivityIndicator visible={loading} />
        <FlatList 
          data={listings}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({ item }) => 
              <Card 
                title={item.title}
                subTitle={'$' + item.price}
                imageUrl={item.images[0].url}
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
    backgroundColor: colors.light,
  }
})