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
    width: 325,
    padding: 6,
    fontSize: 18,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10
  },
  inputContainer: {
    margin: 10,
    alignSelf: 'center'
  },
  label: {
    fontSize: 16,
    paddingBottom: 4,
    fontWeight: 'bold'
  }
});

export default Input;
