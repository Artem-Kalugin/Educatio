import React from 'react';
import {
  View,
  TextStyle,
  ViewStyle,
  ImageStyle,
  StyleSheet,
} from 'react-native';
import Text from '@ui-kit/Text';

export interface IButton {

}

const Button: React.FC<Partial<IButton>> = ({}): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
    </View>
  );
};

interface Styles {
  container: ViewStyle;
}

const getStyles = () =>
  StyleSheet.create<Styles>({
    container: {},
  });

export default Button;
