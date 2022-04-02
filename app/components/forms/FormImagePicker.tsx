import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';

export default function FormImagePicker({name} : {name: string}) {
  const { errors, setFieldValue, touched, values }
    : { errors: any, setFieldValue: any, touched: any, values: any } = useFormikContext();
  
  const imageUris = values[name];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  }

  const handleRemove = (uri: string) => {
    setFieldValue(name, imageUris.filter((imageUri: string) => imageUri !== uri));
  }

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {

  },
});