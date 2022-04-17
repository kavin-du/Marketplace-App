import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import Card from '../components/Card';
import { colors } from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import routes from '../navigation/routes';

const listings = [
    {
        id: 1,
        title: 'Nice watch you',
        price: 100,
        image: require('../assets/watch.jpg'),
    },
    {
        id: 2,
        title: 'Used laptop',
        price: 1000,
        image: require('../assets/laptop.jpg'),
    },
];

export default function ListingScreen() {
  const navigation = useNavigation();

  return (
      <Screen style={styles.screen}>
          <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) => 
                <Card 
                  title={item.title}
                  subTitle={'$' + item.price}
                  image={item.image}
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