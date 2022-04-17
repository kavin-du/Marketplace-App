import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import { colors } from '../config/colors'
import ListItem from '../components/ListItem'
import { useNavigation } from '@react-navigation/native'

export default function ListingDetailsScreen({ route }: {route: any}) {
  const listing = route.params;
  
  return (
    <View>
      <Image style={styles.image} source={listing.image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{"$"+listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem 
            title='Grace Shelby'
            subtitle='7 Listings'
            image={require('../assets/portrait.jpg')}
          ></ListItem>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer: {
      marginVertical: 30,
    }

})