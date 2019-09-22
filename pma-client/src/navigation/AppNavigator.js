import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import ResolveAuthScreen from '../screens/ResolveAuthScreen';
import AuthStackNavigator from './AuthStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    ResolveAuth: ResolveAuthScreen,  // automatic signin process
    Auth: AuthStackNavigator,
    Home:HomeStackNavigator,
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'ResolveAuth'
  })
);
