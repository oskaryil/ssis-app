import { reduxForm, Field } from "redux-form";
import { View, TouchableOpacity, Text } from "react-native";
import { Button } from "@shoutem/ui";
import React from "react";

import Input from "../../../components/Input";
import renderDatePicker from "../../../components/renderDatePicker";
import styles from "../styles/form.styles.js";

const CreateTodoForm = ({
  handleSubmit,
  submitting,
  invalid,
  error,
  onSubmit
}) => (
  <View>
    <Field
      component={Input}
      name="title"
      placeholder="Gör svenska läxan"
      label="Att göra*"
      inputStyle={{ width: "90%" }}
    />
    <Text style={styles.label}>Deadline</Text>
    <Field component={renderDatePicker} name="dueDate" />
    <Button style={styles.addBtn} onPress={handleSubmit(onSubmit)}>
      <Text style={styles.addBtnText}>Lägg till</Text>
    </Button>
  </View>
);

export default reduxForm({ form: "createTodo" })(CreateTodoForm);
