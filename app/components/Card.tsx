import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { colors } from '../config/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Image } from 'react-native-expo-image-cache'

export default function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }: { title: string, subTitle: string, imageUrl: string, onPress: () => void, thumbnailUrl :string }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} tint="light" preview={{ uri: thumbnailUrl }} uri={imageUrl} ></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
  },
})