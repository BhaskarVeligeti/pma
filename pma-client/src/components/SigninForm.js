import React, { useEffect, useContext } from 'react';
import Loader from './Loader';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Spacer from './Spacer'
import { AntDesign, Feather } from '@expo/vector-icons';
import DynamicTextInput from '../formcontrols/DynamicTextInput'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext' // accesing Context
import SimpleReactValidator from 'simple-react-validator';

/**
    * message(field, inputValue, validations, options = {}) How you define validation rules and add messages into the form.
    */
const SigninForm = () => {
    const validator = new SimpleReactValidator({ locale: 'en' });



    /* access Provider in the Context from this component
     state : data
     signup,clearErrorMessage: action funtions
     */
    const { state: { username, password, errorMessage, loading },
        signin, onUsernameChange, onPasswordChange, clearErrorMessage } = useContext(AuthContext);

    const { headerStyle, errorStyle, iconStyle } = styles

    renderError = () => (errorMessage && !loading) ? (<Text h4 h4Style={errorStyle}>{errorMessage}</Text>) : null

    buttonDisable = () => (!validator.allValid() && !loading) ? true : false

    renderButton = () => {
        return (
            <Button
                icon={<AntDesign name="login" style={iconStyle} />}
                iconRight
                title={' '}
                onPress={() => signin({ username, password })}
                raised
                disabled={buttonDisable()}
                buttonStyle={{ borderRadius: 2 }}
            />
        )
    }


    return (
        <View style={{marginLeft:10,marginRight:10}}>
            <Loader loading={loading} />
            <NavigationEvents onDidFocus={clearErrorMessage} />
            <View style={headerStyle}>
                <Feather name="unlock" size={40} color="#6f42c1" />
            </View>
            <Spacer />
            {renderError()}
            <DynamicTextInput
                label='Username'
                maxLength={3}
                secureTextEntry={false}
                autoCapitalize='none'
                autoCorrect={true}
                placeholder='mobile no'
                value={username}
                onChangeText={onUsernameChange}
                onBlur={validator.showMessageFor('username')}
                error={validator.message('username', username, 'required|integer|min:3|max:3')}
            />

            <DynamicTextInput
                label='Password'
                maxLength={3}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='password'
                value={password}
                onChangeText={onPasswordChange}
                onBlur={validator.showMessageFor('password')}
                error={validator.message('password', password, 'required|integer|min:3|max:3')}

            />
             <View style={{marginTop:10}}>
             {renderButton()}
            </View>
        </View>)
};


const styles = StyleSheet.create({

    spacerStyle: {
        margin: 15,
    },
    headerStyle: {
        marginTop: 40, alignItems: 'center'
    },
    headerTextStyle: {
        fontSize: 18, color: 'white', top: 8
    },
    errorStyle: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'white',
        backgroundColor: 'red',
    },
    iconStyle: {
        fontSize: 24,
        color: 'white'
    },

})
export default SigninForm;
