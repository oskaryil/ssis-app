import { reduxForm, Field } from 'redux-form';
import { View, Button, Picker } from 'react-native';
import React from 'react';

import Input from '../../../components/Input';

const ClassPicker = ({
  input: {
    onChange,
    value,
    ...inputProps
  },
  children,
  ...pickerProps
}) => (
  <Picker selectedValue={value} onValueChange={(value) => {
    requestAnimationFrame(() => {
      onChange(value);
    });
  }} {...inputProps} {...pickerProps}>
    {children}
  </Picker>
);

export default ClassPicker;
