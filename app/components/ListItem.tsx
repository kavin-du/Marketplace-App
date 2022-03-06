import { Image, ImageSourcePropType, StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import AppText from './AppText'
import { colors } from '../config/colors'

export default function ListItem(
  { title, subtitle, image, onPress, renderRightActions, IconComponent }:
    { title: string, subtitle?: string, image?: ImageSourcePropType, onPress?: () => void, renderRightActions?: any, IconComponent?: any }
) {
  return (
    <GestureHandlerRootView>

      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image}></Image>}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subtitle && <AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>}
            </View>
            <MaterialCommunityIcons
              name='chevron-right'
              size={25}
              color={colors.medium}
            />
          </View>
        </TouchableHighlight>

      </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500',
  },

})