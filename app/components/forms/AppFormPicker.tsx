import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppPicker from '../AppPicker'
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({ items, name, placeholder, width }: {items: any, name: string, placeholder: string, width: any}) {
  
  const { errors, setFieldValue, touched, values }
   : {errors: any, setFieldValue: any, touched: any, values: any} = useFormikContext();

  return (
    <>
      <AppPicker 
        items={items}
        onSelectedItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]} icon={undefined}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({})