import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import { colors } from '../config/colors'

export default function ListItem({title, subtitle, image}: {title: string, subtitle: string, image: ImageSourcePropType}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}></Image>
      <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    subtitle: { 
        color: colors.medium,
    },
    title: {
        fontWeight: '500',
    },

})