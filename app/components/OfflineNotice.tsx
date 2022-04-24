import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from './AppText';
import Constants from 'expo-constants';
import { colors } from '../config/colors';
import { useNetInfo } from '@react-native-community/netinfo';

export default function OfflineNotice() {
  const netInfo = useNetInfo();
  
  // explicitily comparing to false,
  // otherwise if the property is null, checking falsy returns true  (!xxx)
  if(netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    )

  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    // position: 'absolute', // always appears on top
    marginTop: Constants.statusBarHeight,
    width: '100%',
    zIndex: 1,
  },
  text: {
    color: colors.white,
  }
});