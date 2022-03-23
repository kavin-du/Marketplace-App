import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../config/colors';

export default function ImageInput({imageUri} : {imageUri?: string}) {
  return (
    <View style={styles.container}>
      {imageUri ? 
          <Image source={{ uri: imageUri }} style={styles.image} /> 
        : <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  image: {
    height: '100%', // to fill the container
    width: '100%', // to fill the container
  }
});