import React from 'react';
/* PLOP_INJECT_IMPORT */
import ChevronRight from '../assets/svg/chevron-right.svg';
import ChevronLeft from '@assets/svg/chevron-left.svg';
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
    case 'chevron-forward':
      return <ChevronRight width={36} height={36} color={color} />;
    case 'chevron-right':
      return <ChevronRight width={width} height={height} color={color} />;
    case 'chevron-back':
      return <ChevronLeft width={36} height={36} color={color} />;
    case 'chevron-left':
      return <ChevronLeft width={width} height={width} color={color} />;
    case 'book':
      return <Book width={width} height={height} fill={color} />;
    default:
      return <Book width={width} height={height} fill={color} />;
  }
};

export default Icon;
