import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const Input = props => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{props.label}</Text>
    <TextInput
      style={styles.textInput}
      secureTextEntry={props.isPassword}
      {...props}
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
