import {
  ImageStyle,
  TextStyle,
  ViewStyle,
  LayoutAnimation,
} from 'react-native';
import { DEF_APP_FONT } from '@config/index.js';

type UnionedStyles = TextStyle | ImageStyle | ViewStyle;

export const parseWeightToFontName = (weight: TextStyle['fontWeight']) => {
  const weightMap = {
    900: 'Black',
    800: 'ExtraBold',
    700: 'Bold',
    600: 'SemiBold',
    500: 'Medium',
    400: 'Regular',
    300: 'Light',
    200: 'ExtraLight',
    100: 'Thin',
    normal: 'Regular',
    bold: 'Bold',
  };
  return (weight && weightMap[weight]) || weightMap[400];
};

export const animateLayout = (onAnimationEnd = () => {}) => {
  LayoutAnimation.configureNext(
    {
      duration: 200,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      delete: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
    },
    () => {
      onAnimationEnd();
    },
  );
};
