import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

export default function Screen(props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) {
    return (
        <SafeAreaView style={styles.screen}>
            {props.children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingTop: Constants.statusBarHeight, // but no padding in iOs, bcz safeareaview works on iOs

    }
})