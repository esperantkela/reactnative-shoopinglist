import { StyleSheet, TextInput } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const Input = ({ textPlaceholder, style, onChangeHandler, inputValue }) => {
  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      placeholder={textPlaceholder}
      onChangeText={onChangeHandler}
      value={inputValue}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.secondary,
    borderWidth: 1,
    height: 40,
    marginVertical: 5,
    borderRadius: 5,
  },
});
export default Input;
