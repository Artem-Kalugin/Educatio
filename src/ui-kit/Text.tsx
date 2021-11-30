import React from 'react';
import RN, { TextStyle, StyleSheet, ColorValue } from 'react-native';

export interface IText {
  size: number;
  weight: TextStyle['fontWeight'];
  lineHeight: number;
  color: ColorValue;
  style: TextStyle;
  children: string | JSX.Element;
}

const _Text = RN.Text;

const Text: React.FC<Partial<IText>> = ({
  size = 14,
  weight = '500',
  color = 'black',
  lineHeight = size + 6,
  style = {},
  children = 'default text',
}): JSX.Element => {
  const styles = getStyles(size, weight, lineHeight, color);

  return <_Text style={[styles.text, style]}>{children}</_Text>;
};

interface Styles {
  text: TextStyle;
}

const getStyles: (
  size: number,
  weight: TextStyle['fontWeight'],
  lineHeight: number,
  color: ColorValue,
) => Styles = (size, weight, lineHeight, color) =>
  StyleSheet.create<Styles>({
    text: {
      fontSize: size,
      fontWeight: weight,
      lineHeight: lineHeight,
      color: color,
    },
  });

export default Text;
