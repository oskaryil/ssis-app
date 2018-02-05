import { reduxForm, Field } from 'redux-form';
import { View, Button } from 'react-native';
import React from 'react';

import Input from '../../../components/Input';

const FillOutInformationForm = ({
  handleSubmit,
  submitting,
  invalid,
  error,
  onSubmit
}) => (
  <View>
    <Field component={Input} name="name" placeholder="Namn" label="Namn" />
    <Field component={Input} name="class" placeholder="Klass" label="Klass" />
    <Button onPress={handleSubmit(onSubmit)} title="Klar!" />
  </View>
);

export default reduxForm({ form: 'fillOutInformation' })(
  FillOutInformationForm
);
