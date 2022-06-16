import React, { useState, useEffect } from 'react';
import AnotherProfileView from './AnotherProfileView';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '@navigation/index';
import { useSelector } from 'react-redux';

type NavigationProps = StackScreenProps<StackParamList, 'Home'>;

type PassingProps = {};

const AnotherProfileContainer: React.FC<NavigationProps> = (
  props,
): JSX.Element => {
  const user = {
    name: 'Jon',
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    background:
      'https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg',
  };

  return <AnotherProfileView user={user} {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default AnotherProfileContainer;
