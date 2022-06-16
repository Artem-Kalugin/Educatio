import React from 'react';
import SubscriptionsView from './SubscriptionsView';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackParams } from '@navigation/index';

type NavigationProps = StackScreenProps<AppStackParams, 'Subscriptions'>;

type PassingProps = {};

const SubscriptionsContainer: React.FC<NavigationProps> = (
  props,
): JSX.Element => {
  return <SubscriptionsView {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default SubscriptionsContainer;
