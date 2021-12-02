import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartContainer from '@screens/Start';
import LoginContainer from '@screens/Login';

export type AuthStackParams = {
  Start: undefined;
  Login: undefined;
};

const AuthStackNav = createStackNavigator<AuthStackParams>();

const AuthStack = (): JSX.Element => {
  return (
    <AuthStackNav.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Start">
      <AuthStackNav.Screen name="Start" component={StartContainer} />
      <AuthStackNav.Screen name="Login" component={LoginContainer} />
    </AuthStackNav.Navigator>
  );
};

export default AuthStack;
