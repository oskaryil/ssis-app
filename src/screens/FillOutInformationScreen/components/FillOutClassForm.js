import { reduxForm, Field } from 'redux-form';
import { View, Button, Picker } from 'react-native';
import React from 'react';

import Input from '../../../components/Input';
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
    
    <Field name="class" component={ClassPicker}>
    {renderClasses()}
    </Field>
    <Button onPress={handleSubmit(onSubmit)} title="Klar!" />
  </View>
);

const renderClasses = () => {
  console.log(classesData);
  const pickerItems = [];
  for(let i = 0; i < classesData.classes.length; i++) {
    console.log(classesData.classes[i]);
    pickerItems.push(<Picker.Item key={classesData.classes[i]} label={classesData.classes[i]} value={classesData.classes[i]} />);
  }
  return pickerItems;
}


export default reduxForm({ form: 'fillOutClass' })(
  FillOutClassForm
);
