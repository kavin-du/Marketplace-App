import { Image, StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms/index';

// does not need to re-render every time
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'), // name for the error
  password: Yup.string().required().min(4).label('Password')
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-red.png')}
      />

      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress' // only ios, get email from keychain
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password' // only ios, get pw from keychain
        />

        <SubmitButton title='Submit' />
      </AppForm>

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