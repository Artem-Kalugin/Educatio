import React, { useState, useEffect } from 'react';
import LoginView from './LoginView';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParams } from '@navigation/auth';

type NavigationProps = StackScreenProps<AuthStackParams, 'Login'>;

type PassingProps = {};

const LoginContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  return <LoginView {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default LoginContainer;
