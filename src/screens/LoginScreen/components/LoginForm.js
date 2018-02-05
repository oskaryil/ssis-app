// Formik x React Native example
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import Input from '../../../components/Input';

const LoginForm = ({ handleSubmit, login, invalid, submitting, error }) => (
  <View>
    <Field
      component={Input}
      label={'Användarnamn'}
      placeholder="Användarnamn"
      name="username"
    />
    <Field
      name="password"
      component={Input}
      secureTextEntry
      label="Lösenord"
      placeholder="Lösenord"
    />
    <Button onPress={handleSubmit(login)} title="Logga in" />
  </View>
);

export default reduxForm({ form: 'login' })(LoginForm);
