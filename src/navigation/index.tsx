import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './auth';

const WrapperStackNav = createStackNavigator();
const MainStackNav = createStackNavigator();

const RootStack = () => {
  return (
    <WrapperStackNav.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="App">
      <WrapperStackNav.Screen name="App" component={AppStack} />
    </WrapperStackNav.Navigator>
  );
};

const AppStack = () => {
  return (
    <MainStackNav.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="App">
      <MainStackNav.Screen name="Auth" component={AuthStack} />
    </MainStackNav.Navigator>
  );
};

export default RootStack;
