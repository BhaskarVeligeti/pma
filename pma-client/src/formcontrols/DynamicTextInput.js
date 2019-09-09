import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, HelperText,withTheme } from 'react-native-paper';



const DynamicTextInput = ({theme,label, autoFocus,autoCapitalize, autoCorrect, value, onChangeText, placeholder, secureTextEntry, maxLength,error }) => {


  const {margin}=styles

  // console.log('validator :',error)
  return (
    <>
      <TextInput
        mode='outlined'
        label={label}
        // autoFocus={autoFocus}
        maxLength = {maxLength}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText} />
      <HelperText type="error"  >
        <Text>
          {error}
        </Text>
      </HelperText>

    </>
  )


}

const styles = StyleSheet.create({
  margin:10
})

// export default withTheme(DynamicTextInput);
export default  DynamicTextInput;