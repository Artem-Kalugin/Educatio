import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginContainer from '@screens/Login';

export interface AuthStackParams {
  SignUp: undefined;
}

const AuthStackNav = createStackNavigator();

const AuthStack = (): JSX.Element => {
  return (
    <AuthStackNav.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignUp">
      <AuthStackNav.Screen name="SignUp" component={LoginContainer} />
    </AuthStackNav.Navigator>
  );
};

export default AuthStack;
