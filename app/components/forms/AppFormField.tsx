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
  const {errors, setFieldTouched, setFieldValue, touched, values}: 
        {errors: ErrorsType, setFieldTouched: any, setFieldValue: any, touched: TouchedType, values: any} = useFormikContext();
  const { name, width, ...otherProps } = props;

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text: string) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name as keyof TouchedType]} error={errors[name as keyof ErrorsType]} />
    </>
  )
}

const styles = StyleSheet.create({})