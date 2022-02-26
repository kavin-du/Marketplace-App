import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-red.png')}
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='email'
        keyboardType='email-address'
        onChangeText={(text: string) => setEmail(text)}
        placeholder='Email'
        textContentType='emailAddress' // only ios, get email from keychain
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        onChangeText={(text: string) => setPassword(text)}
        placeholder='Password'
        secureTextEntry
        textContentType='password' // only ios, get pw from keychain
      />
      <AppButton title='Submit' onPress={() => console.log(email, password)} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center'
  }
})