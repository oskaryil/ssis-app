// Formik x React Native example
import React from 'react';
import { Button, View } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import Input from '../../../components/Input';
import PrimaryButton from '../../../components/PrimaryButton';

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
    <PrimaryButton onPress={handleSubmit(login)} title="Logga in" />
  </View>
);

export default reduxForm({ form: 'login' })(LoginForm);
