import React from 'react';
import SearchView from './SearchView';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParams } from '@navigation/home/index';

type NavigationProps = StackScreenProps<HomeStackParams, 'Search'>;

type PassingProps = {};

const SearchContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  return <SearchView {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default SearchContainer;
