import { Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Screen from '../components/Screen'
import * as Yup from 'yup';

import { ErrorMessage, AppForm, AppFormField, SubmitButton } from '../components/forms/index';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import userApi from '../api/users';

// does not need to re-render every time
const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label('Name'),
  email: Yup.string().required().email().label('Email'), // name for the error
  password: Yup.string().required().min(4).label('Password')
});

export default function RegisterScreen() {
  const auth = useAuth(); // context from the root

  const [error, setError] = useState('');

  const handleSubmit = async (userInfo: any) => {
    const result: any = await userApi.register(userInfo);
    
    if(!result.ok) {
      if(result.data) setError(result.data.error);
      else {
        setError('An unexpected error occured.');
        console.log(result);
      }
      return;
    }
    // after registration, login the user automatically

    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken as string);
  }

  return (
    <Screen style={styles.container}>

      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='account'
          name='name'
          placeholder='Name'
          textContentType='name' // only ios, get email from keychain
        />

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

        <SubmitButton title='Register' />
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