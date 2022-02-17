import { Platform, StyleProp, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AppText({ children, style }: {children: string, style?: StyleProp<any>}) {
  return (
      <Text style={[styles.text, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18, 
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    }
})