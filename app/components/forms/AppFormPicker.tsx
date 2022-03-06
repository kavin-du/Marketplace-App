import { PickerIOSComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppPicker from '../AppPicker'
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage';

type AppFormPickerTypes = {
  items: any,
  name: string,
  numberOfColumns?: number,
  placeholder: string,
  PickerItemComponent: any,
  width: any
};
export default function AppFormPicker(props: AppFormPickerTypes) {

  const { errors, setFieldValue, touched, values }
    : { errors: any, setFieldValue: any, touched: any, values: any } = useFormikContext();

  return (
    <>
      <AppPicker
        items={props.items}
        numberOfColumns={props.numberOfColumns}
        onSelectedItem={(item) => setFieldValue(props.name, item)}
        PickerItemComponent={props.PickerItemComponent}
        placeholder={props.placeholder}
        selectedItem={values[props.name]} icon={undefined}
        width={props.width}
      />
      <ErrorMessage error={errors[props.name]} visible={touched[props.name]} />
    </>
  )
}

const styles = StyleSheet.create({})