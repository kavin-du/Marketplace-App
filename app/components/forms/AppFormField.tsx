import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { FormikErrors, FormikTouched, useFormikContext } from 'formik'

type AppFormFieldProps = {
  name: string,
  width?: any,
  [x: string]: any, // list of any, which is indexed by type string
}

type TouchedType = FormikTouched<{email: string; password: string;}>;
type ErrorsType = FormikErrors<{email: string; password: string;}>;

// formik context pass down the context in the widget tree,
// therefore no need to dril a type for props

export default function AppFormField(props: AppFormFieldProps) {
  const {errors, handleChange, setFieldTouched, touched}: 
        {errors: ErrorsType, handleChange: any, setFieldTouched: any, touched: TouchedType} = useFormikContext();
  const { name, width, ...otherProps } = props;

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name as keyof TouchedType]} error={errors[name as keyof ErrorsType]} />
    </>
  )
}

const styles = StyleSheet.create({})