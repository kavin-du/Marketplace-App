import { Alert, Keyboard, StyleSheet, View } from 'react-native'
import React from 'react'
import * as Notifications from 'expo-notifications';
import * as Yup from 'yup';

import messagesApi from '../api/messages';
import { AppForm, AppFormField, SubmitButton } from './forms';

export default function ContactSellerForm({ listing }: {listing: any}) {
  // message field from form and resetForm from formik
  const handleSubmit = async ( {message}: any, {resetForm}: any) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if(!result.ok) {
      console.log('Error', result);
      return Alert.alert('Error', 'Could not send the message to the user');
    }

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Awesome!',
        body: 'Your message was sent to the seller.',
      },
      trigger: null,
    });
  }

  return (
    <AppForm
      initialValues={{ message: ""}}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name='message'
        numberOfLines={2}
        placeholder='Message..'
      />
      <SubmitButton title='Contact Seller' />
    </AppForm>
  )
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label('Message'),
});
