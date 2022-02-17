import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import { colors } from '../config/colors'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/background.jpg')}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$150</AppText>
        <View style={styles.userContainer}>
          <ListItem 
            title='Kavindu Chamith'
            subtitle='7 Listings'
            image={require('../assets/chair.jpg')}
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