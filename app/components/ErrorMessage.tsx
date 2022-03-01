import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText'

export default function ErrorMessage({error}: {error?: string}) {
  return (
    <AppText style={styles.error}>{error}</AppText>
  )
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
  }
})