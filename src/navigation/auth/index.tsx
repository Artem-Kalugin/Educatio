import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartContainer from '@screens/Start';
import LoginContainer from '@screens/Login';
import SignUpContainer from '@screens/SignUp';
import PhoneConfirmationContainer from '@screens/PhoneConfirmation';

export type AuthStackParams = {
  Start: undefined;
  Login: undefined;
  SignUp: undefined;
  PhoneConfirmation: { phoneData: object };
};

const AuthStackNav = createStackNavigator<AuthStackParams>();

const AuthStack = (): JSX.Element => {
  return (
    <AuthStackNav.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Start">
      <AuthStackNav.Screen name="Start" component={StartContainer} />
      <AuthStackNav.Screen name="Login" component={LoginContainer} />
      <AuthStackNav.Screen name="SignUp" component={SignUpContainer} />
      <AuthStackNav.Screen
        name="PhoneConfirmation"
        component={PhoneConfirmationContainer}
      />
    </AuthStackNav.Navigator>
  );
};

export default AuthStack;
