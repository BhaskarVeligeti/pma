import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './src/navigationRef';
// providers declaration :
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as LocationProvider } from './src/context/LocationContext'

// auth :
import ResolveAuthScreen from './src/screens/auth/ResolveAuthScreen';
import SigninScreen from './src/screens/auth/SigninScreen';
// home :
import HomeScreen from './src/screens/home/HomeScreen';
import LocationScreen from './src/screens/location/LocationScreen';
import Sales from './src/screens/visualization/Sales';
import Trend from './src/screens/visualization/Trend';
import Product from './src/screens/visualization/Product';


// test :
import BranchSales from './src/screens/test/BranchSales';







// ******************************************** Auth screens flow : *****************************************************

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
  }},
  BranchSales: {
    screen: BranchSales,
    navigationOptions: {
      header: null
    },
  },
})

// ******************************************** Home flow : *****************************************************

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Sales:Sales,
  Trend:Trend,
  Product:Product,

},{
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: '#ffffff',
      elevation: 0 
    },
    headerTintColor: '#6f42c1', 
  }
}
)




// ******************************************** MainNavigator : *****************************************************


// centralised router for navigation
const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,  // automatic signin process
  Auth: AuthStack,
  mainFlow: HomeStack,
},

  {
    initialRouteName: 'ResolveAuth'
  }
  );







const AppContainer = createAppContainer(switchNavigator);




export default () => {
  return (
    <LocationProvider>
    <PaperProvider>
        <AuthProvider>
          <AppContainer
            ref={(navigator) => { //Navigation From Outside of React
              setNavigator(navigator);
            }} />

        </AuthProvider>
    </PaperProvider>
    </LocationProvider>

  )
}