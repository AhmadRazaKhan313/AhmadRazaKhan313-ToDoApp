import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  const [text, setText] = useState('');

  const onChangeText = (inputText) => {
    setText(inputText);
    props.onChangeText(inputText);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      value={text}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Input;
