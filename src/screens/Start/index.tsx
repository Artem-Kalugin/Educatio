import React from 'react';
import LoginView from './StartView';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParams } from '@navigation/auth/index';

type NavigationProps = StackScreenProps<AuthStackParams, 'Start'>;

type PassingProps = {};

const StartContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  return <LoginView {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default StartContainer;
