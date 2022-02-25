import {StyleProp, Text } from 'react-native'
import React from 'react';
import { defaultStyles } from '../config/styles';

export default function AppText({ children, style }: {children: string, style?: StyleProp<any>}) {
  return (
      <Text style={[defaultStyles.text, style]}>{children}</Text>
  )
}
