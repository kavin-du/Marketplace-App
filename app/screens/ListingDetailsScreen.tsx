import {KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import { colors } from '../config/colors'
import ListItem from '../components/ListItem'
import { Image } from 'react-native-expo-image-cache'
import ContactSellerForm from '../components/ContactSellerForm'

export default function ListingDetailsScreen({ route }: {route: any}) {
  const listing = route.params;
  
  return (
    <KeyboardAvoidingView
      behavior='position'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
      <Image 
        style={styles.image} 
        tint="light" 
        preview={{ uri: listing.images[0].thumbnailUrl}} 
        uri={listing.images[0].uri}
      />
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
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
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