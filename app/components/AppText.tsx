import {StyleProp, Text } from 'react-native'
import React from 'react';
import { defaultStyles } from '../config/styles';

type AppTextProps = {
  children?: string, 
  style?: StyleProp<any>,
  [x: string]: any, // list of any, which is indexed by a type of string
};

export default function AppText(props: AppTextProps) {
  const { children, style, ...otherProps } = props;

  return (
    <>
      {children && <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>}
    </>
  )
}
