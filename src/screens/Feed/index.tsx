import React, { useState, useEffect } from 'react';
import FeedView from './FeedView';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '@navigation/index';

type NavigationProps = StackScreenProps<StackParamList, 'Home'>;

type PassingProps = {};

const FeedContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  return <FeedView {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default FeedContainer;
