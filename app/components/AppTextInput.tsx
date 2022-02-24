import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../config/colors'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppTextInput({icon, ...otherProps}: {icon?: any, otherProps?: any}) {
  
  const [text, onChangeText] = useState('')
  
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
      <TextInput style={styles.textInput} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  icon: {
    marginRight: 10,  
  }
})