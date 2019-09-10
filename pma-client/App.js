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

// auth :
import ResolveAuthScreen from './src/screens/auth/ResolveAuthScreen';
import SigninScreen from './src/screens/auth/SigninScreen';
// home :
import HomeScreen from './src/screens/home/HomeScreen';


// test :
import BarChartTest from './src/screens/test/BarChartTest';

import BranchTodaySalesScreen from './src/screens/visualization/BranchTodaySalesScreen';






// ******************************************** Auth screens flow : *****************************************************

const AuthStack = createStackNavigator({
  BarChartTest: {
    screen: BarChartTest,
    navigationOptions: {
      header: null
    },
  },

  Signin: {
    screen: SigninScreen,
    navigationOptions: {
      header: null
    },
  },
})

// ******************************************** Home flow : *****************************************************

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  BranchTodaySales:BranchTodaySalesScreen
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
    <PaperProvider>
        <AuthProvider>
          <AppContainer
            ref={(navigator) => { //Navigation From Outside of React
              setNavigator(navigator);
            }} />

        </AuthProvider>
    </PaperProvider>

  )
}