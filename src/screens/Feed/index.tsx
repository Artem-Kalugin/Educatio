import React from 'react';
import FeedView from './FeedView';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParams } from '@navigation/home/index';

type NavigationProps = StackScreenProps<HomeStackParams, 'Feed'>;

type PassingProps = {};

const FeedContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  return <FeedView {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default FeedContainer;
