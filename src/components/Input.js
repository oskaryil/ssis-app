import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const Input = ({ label, input, ...inputProps }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.textInput}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={input.value}
      {...inputProps}
    />
  </View>
);

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: 300,
    padding: 6,
    fontSize: 18,
    backgroundColor: 'rgba(191, 191, 191, 0.1)',
    borderRadius: 10
  },
  inputContainer: {
    margin: 10
  },
  label: {
    fontSize: 16,
    paddingBottom: 4
  }
});

export default Input;
