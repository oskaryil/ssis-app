// Formik x React Native example
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { withFormik } from 'formik';

import Input from '../../../components/Input';

const enhancer = withFormik({
  /*...*/
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
});

const MyReactNativeForm = props => (
  <View>
    <Input
      onChangeText={text => props.setFieldValue('username', text)}
      value={props.values.email}
      label={'Användarnamn'}
      placeholder="Användarnamn"
    />
    <Input
      onChangeText={text => props.setFieldValue('password', text)}
      password
      value={props.values.email}
      label="Lösenord"
      placeholder="Lösenord"
      isPassword
    />
    <Button onPress={onSubmit => props.handleSubmit(onSubmit)} title="Submit" />
  </View>
);

export default enhancer(MyReactNativeForm);
