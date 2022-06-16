import React, { useState, useEffect } from 'react';
import SearchView from './SearchView';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '@navigation/index';

type NavigationProps = StackScreenProps<StackParamList, 'Home'>;

type PassingProps = {};

const SearchContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  return <SearchView {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default SearchContainer;
