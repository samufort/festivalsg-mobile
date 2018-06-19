import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AuthScreen from '../screens/AuthScreen';

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ Auth: AuthScreen });

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
  Main: MainTabNavigator,
}, {
  initialRouteName: 'AuthLoading',
});
