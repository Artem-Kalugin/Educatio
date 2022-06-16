import React, { useState, useEffect } from 'react';
import SubscriptionsView from './SubscriptionsView';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '@navigation/index';

type NavigationProps = StackScreenProps<StackParamList, 'Home'>;

type PassingProps = {};

const SubscriptionsContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  return <SubscriptionsView {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default SubscriptionsContainer;
