import React from 'react';
import { StyleSheet, View, Dimensions, Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback,Platform} from 'react-native';
import SigninForm from '../components/SigninForm';
import { Card } from 'react-native-elements';
import Spacer from '../components/Spacer'
const SigninScreen = ({ navigation }) => {

  const { container } = styles
  return (
    <>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1,backgroundColor: 'white'  }} enabled >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View >
      {/* <Card containerStyle={container}> */}
      <SigninForm />
        <View style={{ flex: 1 }} />
        <Spacer />
        <Spacer />
        {/* </Card> */}
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
 
  </>
  )

}

const styles = StyleSheet.create({
  container: {
    // margin: 10,
    backgroundColor: 'white',   
    borderRadius: 5,
    borderColor: '#f8f9fa',
    shadowColor: "#343a40",
    shadowOffset: {
      width: 0.5,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 20.50,
    elevation: 10,
  }
});

export default SigninScreen;
