import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import LocationScreen from '../screens/LocationScreen';
import SigninScreen from '../screens/SigninScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const AuthStack = createStackNavigator({
  Location: {
    screen: LocationScreen,
    navigationOptions: {
      header: null
    },
  },

  Signin: {
    screen: SigninScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ffffff',
        elevation: 0
      },
      headerTintColor: '#6f42c1'
    }
  },

})

AuthStack.path = '';

const authStackNavigator = createStackNavigator({
  AuthStack: {
    screen: AuthStack,
    navigationOptions: {
      header: null
    },
  },
}, config);

authStackNavigator.path = '';

export default authStackNavigator;
