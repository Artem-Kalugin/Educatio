import React from 'react';
/* PLOP_INJECT_IMPORT */
import Close from '../assets/svg/close.svg';
import Lokc from '../assets/svg/lock.svg';
import Image from '../assets/svg/image.svg';
import Group from '../assets/svg/group.svg';
import Description from '../assets/svg/description.svg';
import Delete from '../assets/svg/delete.svg';
import Settings from '../assets/svg/settings.svg';
import Person from '../assets/svg/person.svg';
import Favorite from '../assets/svg/favorite.svg';
import Visibility from '../assets/svg/visibility.svg';
import Profile from '../assets/svg/profile.svg';
import Feed from '../assets/svg/feed.svg';
import Search from '../assets/svg/search.svg';
import Check from '../assets/svg/check.svg';
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
    case 'close':
      return <Close width={width} height={height} color={color} />;
    case 'lock':
      return <Lokc width={width} height={height} color={color} />;
    case 'image':
      return <Image width={width} height={height} color={color} />;
    case 'group':
      return <Group width={width} height={height} color={color} />;
    case 'description':
      return <Description width={width} height={height} color={color} />;
    case 'delete':
      return <Delete width={width} height={height} color={color} />;
    case 'settings':
      return <Settings width={width} height={height} color={color} />;
    case 'person':
      return <Person width={width} height={height} color={color} />;
    case 'like':
      return <Favorite width={width} height={height} color={color} />;
    case 'view':
      return <Visibility width={width} height={height} color={color} />;
    case 'profile':
      return <Profile width={width} height={height} color={color} />;
    case 'feed':
      return <Feed width={width} height={height} color={color} />;
    case 'search':
      return <Search width={width} height={height} color={color} />;
    case 'check':
      return <Check width={width} height={height} color={color} />;
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
