import { Image, ImageSourcePropType, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable';


import { colors } from '../config/colors'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function ListItem({ title, subtitle, image, onPress, renderRightActions }: { title: string, subtitle: string, image: ImageSourcePropType, onPress: () => void, renderRightActions: any }) {
  return (
    <GestureHandlerRootView>

      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            <Image source={image} style={styles.image}></Image>
            <View>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>

      </Swipeable>
    </GestureHandlerRootView>
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