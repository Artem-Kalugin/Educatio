import React from 'react';
/* PLOP_INJECT_IMPORT */
import Book from '@assets/svg/Book.svg';
import { Color } from 'react-native-svg';

export interface IIcon {
  size: number;
  width: number;
  height: number;
  color: Color;
  name: string;
}

const Icon: React.FC<Partial<IIcon>> = ({
  size = 24,
  width = size,
  height = size,
  name = 'book',
  color = 'blue',
}): JSX.Element => {
  switch (name) {
    /* PLOP_INJECT_COMPONENT */
    case 'book':
      return <Book width={width} height={height} fill={color} />;
    default:
      return <Book width={width} height={height} fill={color} />;
  }
};

export default Icon;
