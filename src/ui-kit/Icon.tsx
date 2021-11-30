import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Book from '../assets/svg/';

export interface IIcon {
  width: number;
  height: number;
  name: string;
}

const Icon: React.FC<Partial<IIcon>> = ({}): JSX.Element => {
  return <Book width="100%" height="100%" />;
};

export default Icon;
