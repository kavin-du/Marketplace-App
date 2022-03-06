import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

export default function AppForm(
  {initialValues, children, validationSchema}: 
  {initialValues: any, children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, validationSchema: any}
  ) {
    // { handleChange, handleSubmit, errors, setFieldTouched, touched } are not used now
  return (
    <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => <>{children}</>} 
      </Formik>
  )
}

const styles = StyleSheet.create({})