import React from 'react';
import LoginView from './LoginView';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '@navigation/index';

type NavigationProps = StackScreenProps<StackParamList, 'Home'>;

type PassingProps = {};

const LoginContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  return <LoginView {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default LoginContainer;
