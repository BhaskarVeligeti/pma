import React from 'react';
import { StyleSheet, View, Dimensions, Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback,Platform} from 'react-native';
import SigninForm from '../../components/SigninForm';
const { width, height } = Dimensions.get('window');

const SigninScreen = ({ navigation }) => {

  const { container } = styles
  return (
    <>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1,backgroundColor: 'white'  }} enabled >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={container}>
      <SigninForm />
        <View style={{ flex: 1 }} />
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  </>
  )

}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'white'
    
  }
});

export default SigninScreen;
