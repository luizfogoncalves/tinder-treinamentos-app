import React from 'react';
import { View } from 'react-native';

import { InputText } from './styles';

const Input = ({ func, value, secureText = false }) => {

  return (
  <View>
    <InputText
      value={value}
      secureTextEntry={secureText}
      onChangeText={(text) => {
        func(text)
      }}
    />
  </View>);
}

export default Input;