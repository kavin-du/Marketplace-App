import { Button, Image, ImageBackground, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {

    return (
        <ImageBackground blurRadius={5} source={require('../assets/background.jpg')} style={styles.background} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => console.log('pressed')}></AppButton>
                <AppButton title="Register" onPress={() => console.log('pressed')} color='secondary'></AppButton>
            </View>
        </ImageBackground>

    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1, // takes entire screen
        justifyContent: 'flex-end', // align along primary axis, buttons
        alignItems: 'center', // align along secondary axis, the logo
    },
    buttonContainer: {
        padding: 10,
        width: '100%',
    },
    logo: {
        width: 100, 
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 10,
    }
});