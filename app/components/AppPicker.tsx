import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {defaultStyles} from '../config/styles';
import AppText from './AppText';

type TextInputProps = {
  icon: any,
  placeholder: string,
  [x: string]: any,
};
export default function AppPicker(props: TextInputProps) {
  
  // const [text, onChangeText] = useState('');
  const {icon, placeholder, ...otherProps} = props;
  
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons 
        name='chevron-down'
        size={20} 
        color={defaultStyles.colors.medium} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10, 
  },
  text: {
    flex: 1,
  }
})