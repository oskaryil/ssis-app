import { reduxForm, Field } from 'redux-form';
import { View, Button, Picker, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import Input from '../../../components/Input';
import styles from '../styles/form.styles';
import ClassPicker from './ClassPicker';
import classesData from './classes.json';

const FillOutClassForm = ({
  handleSubmit,
  submitting,
  invalid,
  error,
  onSubmit,
}) => (
  <View>
    <Text style={styles.title}>Sista steget nu!</Text>
    <Text style={styles.pickClassText}>Välj din klass</Text>
    <Field name="class" component={ClassPicker}>
    {renderClasses()}
    </Field>
    <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit(onSubmit)}>
      <Text style={styles.submitBtnText}>Klar!</Text>
    </TouchableOpacity>
  </View>
);

const renderClasses = () => {
  const pickerItems = [];
  for(let i = 0; i < classesData.classes.length; i++) {
    pickerItems.push(<Picker.Item key={classesData.classes[i]} label={classesData.classes[i]} value={classesData.classes[i]} />);
  }
  return pickerItems;
}


export default reduxForm({ form: 'fillOutClass' })(
  FillOutClassForm
);
