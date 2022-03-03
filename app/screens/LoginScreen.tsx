import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import { Formik } from 'formik'
import * as Yup from 'yup';
import ErrorMessage from '../components/ErrorMessage'
import AppFormField from '../components/AppFormField'

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

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
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
            <AppButton title='Submit' onPress={handleSubmit} />

          </>
        )}
      </Formik>

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