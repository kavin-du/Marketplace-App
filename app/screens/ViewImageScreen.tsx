import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import colors from '../config/colors';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>   
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                resizeMode='contain'
                source={require('../assets/chair.jpg')}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        backgroundColor: colors.primary,
        width: 50,
        height: 50,
        position: 'absolute', // relative to parent, not to each other
        top: 40, 
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1, // takes entire screen
    },
    deleteIcon: {
        backgroundColor: colors.secondary,
        width: 50,
        height: 50,
        position: 'absolute', // relative to parent, not to each other
        top: 40, 
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})