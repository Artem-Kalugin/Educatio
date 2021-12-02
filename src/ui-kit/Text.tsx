import React from 'react';
import RN, { TextStyle, StyleSheet, ColorValue } from 'react-native';

export interface IText {
  size: number;
  weight: TextStyle['fontWeight'];
  lineHeight: number;
  color: ColorValue;
  style: TextStyle;
  fontFamily: string;
  italic: boolean;
  children: string | JSX.Element;
}

const _Text = RN.Text;

const Text: React.FC<Partial<IText>> = ({
  size = 14,
  weight = '500',
  color = 'black',
  lineHeight = size + 6,
  style = {},
  italic = false,
  fontFamily = 'OpenSans_Condensed',
  children = 'default text',
}): JSX.Element => {
  const styles = getStyles(size, weight, lineHeight, italic, fontFamily, color);

  return <_Text style={[styles.text, style]}>{children}</_Text>;
};

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
interface Styles {
  text: TextStyle;
}

const getStyles: (
  size: number,
  weight: TextStyle['fontWeight'],
  lineHeight: number,
  italic: boolean,
  fontFamily: string,
  color: ColorValue,
) => Styles = (size, weight, lineHeight, italic, fontFamily: string, color) =>
  StyleSheet.create<Styles>({
    text: {
      fontFamily: `OpenSans_Condensed-Light`,
      color: color,
    },
  });

export default Text;
