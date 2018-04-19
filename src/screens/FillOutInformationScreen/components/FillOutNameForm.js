import { reduxForm, Field } from 'redux-form';
import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';

import Input from '../../../components/Input';
import styles from '../styles/form.styles.js';

const FillOutNameForm = ({
  handleSubmit,
  submitting,
  invalid,
  error,
  onSubmit,
}) => (
  <View>
    <Text style={styles.title}>Snart där!</Text>
    <Field component={Input} name="name" placeholder="John Appleseed" label="Namn" inputStyle={{ width: '90%' }} />
    <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit(onSubmit)}>
      <Text style={styles.submitBtnText}>Nästa</Text>
    </TouchableOpacity>
  </View>
);


export default reduxForm({ form: 'fillOutName' })(
  FillOutNameForm
);
